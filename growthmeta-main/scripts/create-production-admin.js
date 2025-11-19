const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function createProductionAdmin() {
  try {
    console.log('🔗 Connecting to database...');
    
    // Test database connection
    await prisma.$connect();
    console.log('✅ Database connected successfully');

    // Check if admin user already exists
    const existingAdmin = await prisma.user.findUnique({
      where: { email: 'admin@growthmeta.com' }
    });

    if (existingAdmin) {
      console.log('⚠️  Admin user already exists');
      console.log('📧 Email: admin@growthmeta.com');
      console.log('🔑 Password: admin123');
      return;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash('admin123', 12);

    // Create admin user
    const admin = await prisma.user.create({
      data: {
        email: 'admin@growthmeta.com',
        name: 'Administrator',
        password: hashedPassword,
        role: 'ADMIN',
      }
    });

    console.log('✅ Production admin user created successfully!');
    console.log('📧 Email: admin@growthmeta.com');
    console.log('🔑 Password: admin123');
    console.log('🔗 Login at: https://growthmeta.vercel.app/admin/login');

  } catch (error) {
    console.error('❌ Error creating admin user:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createProductionAdmin();