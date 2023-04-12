const connection = require('./connection');

const updateSpaceStatus = async (space) => {
     const { status } = space;
     const { userEmail } = space;
     const { userType } = space;

     const dateUTC = new Date(Date.now()).toUTCString();

     const query = 'INSERT INTO spaces(status, userEmail, userType, time) VALUES (?, ?, ?, ?)'

     const [updatedSpace] = await connection.execute(query, [status, userEmail, userType, dateUTC]);

     return updatedSpace;
}