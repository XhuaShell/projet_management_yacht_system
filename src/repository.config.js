// Las clases implementadas, éstas son las que cambian dependiendo de la fuente de datos
import { UsuarioMysqlRepository } from "./repository/mysql/UsuarioMysqlRepository.js"
import { ZonaMsqlRepository } from "./repository/mysql/ZonaMysqlRepository.js";

const type = 'mysql';

const repositoryFactory = (type) => {
    switch (type) {
        case 'mysql':
            return {
                UsuarioRepository:  new UsuarioMysqlRepository(),
                ZonaRepository: new ZonaMsqlRepository(),
            } 
        case 'postgres':{}
    }
}

export const REPOSITORY =  repositoryFactory(type);
