import db from "database/database";

async function getRandomUser(){
    const { rows } = await db.query(
        'SELECT * FROM people ORDER BY RANDOM() LIMIT 1;'
    )
    return rows;
};

const usersRepositories = {
    getRandomUser,
}

export default usersRepositories;
