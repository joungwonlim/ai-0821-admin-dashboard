import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
  /* config options here */
};

export default withSentryConfig(
  nextConfig,
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // Suppresses source map uploading logs during build in CI
    silent: true,
    org: process.env.SENTRY_ORG,
    project: process.env.SENTRY_PROJECT,
  },
  {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // These options are now handled by instrumentation.ts
    // widenClientFileUpload: true,
    // transpileClientSDK: true,
    // tunnelRoute: "/monitoring-tunnel",
    // hideSourceMaps: true,

    // Start Sentry when running locally
    // autoInstrumentServerFunctions: true,
    // autoInstrumentClientFunctions: true,
  }
);
