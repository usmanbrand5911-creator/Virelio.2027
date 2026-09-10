const { execSync } = require('child_process');
try {
  console.log('Generating Prisma Client...');
  execSync('npx prisma generate --schema=prisma/schema.prisma', { stdio: 'inherit' });
} catch (err) {
  console.log('Prisma generate warning, proceeding with build...');
}
console.log('Running Next.js build...');
execSync('npx next build', { stdio: 'inherit' });
