import mssql from 'mssql';

/**
 * Connect to MSSQL
 */
const URI = `${process.env.DB_CONNECTION_MSSQL}://${process.env.DB_USERNAME_MSSQL}:${process.env.DB_PASSWORD_MSSQL}`+
            `@${process.env.DB_HOST_MSSQL}/${process.env.DB_NAME_MSSQL}?encrypt=false&domain=${process.env.DB_DOMAIN_MSSQL}&driver=msnodesqlv8`;

let queryExecute = async (query) => {
    return new Promise((resolve, reject) => {
        new mssql.connect(URI).then(pool => {
            return pool.request().query(query)
        }).then(result => {
            resolve(result.recordset);
            mssql.close();
        }).catch(err => {
            reject(err)
            mssql.close();
        });
    });
}

module.exports = queryExecute;
