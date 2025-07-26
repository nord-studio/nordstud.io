FROM alpine:3.22 AS base

RUN apk update ; apk add --no-cache libc6-compat nodejs pnpm

# Configure pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

FROM base AS builder

WORKDIR /app

COPY . .

# First install the dependencies (as they change less often)
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

ENV NEXT_TELEMETRY_DISABLED=1

# Build the project
RUN pnpm build

FROM base AS runner
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy the build output
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone .
COPY --from=builder --chown=nextjs:nodejs /app/.next/static .
COPY --from=builder --chown=nextjs:nodejs /app/public .

EXPOSE 3000

ENV HOSTNAME=0.0.0.0
ENV PORT=3000

USER nextjs
CMD ["node", "server.js"]