// Las clases implementadas, éstas son las que cambian dependiendo de la fuente de datos
import { AmarreMysqlRepository } from "./repository/mysql/AmarreMysqlRepository.js";
import { UsuarioMysqlRepository } from "./repository/mysql/UsuarioMysqlRepository.js"
import { ZonaMsqlRepository } from "./repository/mysql/ZonaMysqlRepository.js";

const type = 'mysql';

const repositoryFactory = (type) => {
    switch (type) {
        case 'mysql':
            return {
                UsuarioRepository:  new UsuarioMysqlRepository(),
                ZonaRepository: new ZonaMsqlRepository(),
               /* AmarreRepository: new AmarreMysqlRepository(),*/
            } 
        case 'postgres':{}
    }
}

export const REPOSITORY =  repositoryFactory(type);
