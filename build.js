const { execSync } = require('child_process');

const dbUrl = "postgresql://neondb_owner:npg_gY1Pq2vLkoXI@ep-long-cell-a18t1j4k-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require";
process.env.DATABASE_URL = dbUrl;

try {
  console.log('Generating Prisma Client...');
  execSync('npx prisma generate', { stdio: 'inherit', env: { ...process.env, DATABASE_URL: dbUrl } });
} catch (err) {
  console.log('Prisma generate warning skipped...');
}

console.log('Building Next.js app...');
execSync('npx next build', { stdio: 'inherit', env: { ...process.env, DATABASE_URL: dbUrl } });
