//db_connect not connected yet

async function getAllUsers() {
    let sql = `SELECT * FROM users`
    return await con.query(sql)

}

module.exports = { getAllUsers }
