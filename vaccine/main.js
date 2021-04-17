const ibmdb = require('ibm_db');

//Set the config to DB2 via IBM console
const DB2_CONFIG = {
  
}

//Set Schema and Table Name
const SCHEMA_NAME = 'JGG08509'
const TABLE_NAME = 'COVID_DATA'

const connStr = "DATABASE="+DB2_CONFIG['db']+";HOSTNAME="+DB2_CONFIG['hostname']+";PORT="+DB2_CONFIG['port']+";PROTOCOL=TCPIP;UID="+DB2_CONFIG['username']+";PWD="+DB2_CONFIG['password']+";";

async function main(params) {
    try {
        let conn = await ibmdb.open(connStr);
        let city = params['mn_name'].normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
        let data = await get_data_by_city(city, conn);
        return {data: data};
    } catch(e) {
        return {success:-1, message:e};
    }
}

async function get_data_by_city(cityName, conn) {
    const queryStr = `SELECT COUNT(*) FROM ${SCHEMA_NAME}.${TABLE_NAME} WHERE "estabelecimento_municipio_nome" = ?`;
    let data = await conn.query(queryStr, [cityName]);
    return data;
}