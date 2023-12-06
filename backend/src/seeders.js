const userSchema = require('./models/user');

const seeder = async () => {
    try {
        const userExists = await userSchema.findOne();

        if (!userExists) {
            await userSchema.create({
                name: 'Nombre',
                lastName: 'Apellido',
                email: 'correo@example.com',
                city: 'Ciudad',
                country: 'País',
                summary: 'Resumen del usuario',
                frameworks: [
                    {
                        name: 'Framework1',
                        level: 'Intermedio',
                        year: '2022',
                    },
                    {
                        name: 'Framework2',
                        level: 'Avanzado',
                        year: '2021',
                    }
                ],
                hobbies: [
                    {
                        name: 'Hobby1',
                        description: 'Descripción del hobby 1',
                    },
                    {
                        name: 'Hobby2',
                        description: 'Descripción del hobby 2',
                    }
                ],
            });

            console.log('Usuario creado con éxito.');
        } else {
            console.log('El usuario ya existe.');
        }
    } catch (error) {
        console.error('Error al crear el usuario:', error);
    }
};
seeder();
module.exports = { seeder };