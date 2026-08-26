import { SecretsManagerClient, GetSecretValueCommand } from "@aws-sdk/client-secrets-manager";

interface CachedSecret {
  value: string;
  expiresAt: number;
}

let cachedApiKey: CachedSecret | null = null;
const CACHE_TTL_MS = 15 * 60 * 1000; // 15 minutes cache TTL

/**
 * Retrieves the Resend API key from AWS Secrets Manager based on environment variables,
 * falling back to process.env.RESEND_API_KEY if AWS is not configured or fails.
 */
export async function getResendApiKey(): Promise<string> {
  const now = Date.now();
  if (cachedApiKey && cachedApiKey.expiresAt > now) {
    return cachedApiKey.value;
  }

  // Fallback to local environment variable if explicitly configured
  if (process.env.RESEND_API_KEY) {
    cachedApiKey = {
      value: process.env.RESEND_API_KEY,
      expiresAt: now + CACHE_TTL_MS,
    };
    return process.env.RESEND_API_KEY;
  }

  const appEnv = (process.env.APP_ENV || process.env.NODE_ENV || "development").toLowerCase();
  const isProd = appEnv === "production" || appEnv === "prod";

  const secretName = isProd
    ? (process.env.AWS_SECRET_NAME_PROD || "immunotrack/prod/resend-api-key")
    : (process.env.AWS_SECRET_NAME_DEV || "immunotrack/dev/resend-api-key");

  const region = process.env.AWS_REGION || "us-east-1";

  // Build client configuration
  const clientConfig: { region: string; credentials?: { accessKeyId: string; secretAccessKey: string } } = {
    region,
  };

  if (process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY) {
    clientConfig.credentials = {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    };
  }

  try {
    const client = new SecretsManagerClient(clientConfig);
    const response = await client.send(
      new GetSecretValueCommand({
        SecretId: secretName,
      })
    );

    if (!response.SecretString) {
      throw new Error(`Secret string for ${secretName} was empty.`);
    }

    // Secret can be raw API key string or JSON object { "resend_api_key": "re_..." } / { "RESEND_API_KEY": "re_..." }
    let apiKey = response.SecretString.trim();
    if (apiKey.startsWith("{")) {
      try {
        const parsed = JSON.parse(apiKey);
        apiKey = parsed.resend_api_key || parsed.RESEND_API_KEY || parsed.api_key || apiKey;
      } catch {
        // use raw string if not valid JSON
      }
    }

    cachedApiKey = {
      value: apiKey,
      expiresAt: now + CACHE_TTL_MS,
    };

    return apiKey;
  } catch (error) {
    console.error(`[AWS Secrets Manager Error] Failed to retrieve secret [${secretName}]:`, error);

    if (process.env.RESEND_API_KEY) {
      return process.env.RESEND_API_KEY;
    }

    throw new Error(`Unable to fetch Resend API key from AWS secret [${secretName}] and no fallback RESEND_API_KEY found.`);
  }
}
