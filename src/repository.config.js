// Las clases implementadas, éstas son las que cambian dependiendo de la fuente de datos
import { AmarreMysqlRepository } from "./repository/mysql/AmarreMysqlRepository.js";
import { TipoYateMysqlRepository } from "./repository/mysql/TipoYateMysqlRepository.js";
import { UsuarioMysqlRepository } from "./repository/mysql/UsuarioMysqlRepository.js"
import { ZonaMsqlRepository } from "./repository/mysql/ZonaMysqlRepository.js";

const type = 'mysql';

const repositoryFactory = (type) => {
    switch (type) {
        case 'mysql':
            return {
                UsuarioRepository:  new UsuarioMysqlRepository(),
                ZonaRepository: new ZonaMsqlRepository(),
<<<<<<< HEAD
                AmarreRepository: new AmarreMysqlRepository(),
                TipoYateRepository: new TipoYateMysqlRepository()
=======
               /* AmarreRepository: new AmarreMysqlRepository(),*/
>>>>>>> 0d9864db21762bdcbdb0e430fb4cc378256ed5a3
            } 
        case 'postgres':{}
    }
}

export const REPOSITORY =  repositoryFactory(type);
