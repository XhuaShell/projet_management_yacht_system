// Las clases implementadas, éstas son las que cambian dependiendo de la fuente de datos
import { TipoYateMysqlRepository } from "./repository/mysql/TipoYateMysqlRepository.js";
import { UsuarioMysqlRepository } from "./repository/mysql/UsuarioMysqlRepository.js";
import { ZonaMsqlRepository } from "./repository/mysql/ZonaMysqlRepository.js";
import { AmarreMysqlRepository } from "./repository/mysql/AmarreMysqlRepository.js";

const type = "mysql";

const repositoryFactory = (type) => {
    switch (type) {
        case "mysql":
            return {
                UsuarioRepository: new UsuarioMysqlRepository(),
                ZonaRepository: new ZonaMsqlRepository(),
                TipoYateRepository: new TipoYateMysqlRepository(),
                AmarreRepository: new AmarreMysqlRepository(),
                TipoYateRepository: new TipoYateMysqlRepository(),
            };
        case "postgres": {
        }
    }
};

export const REPOSITORY = repositoryFactory(type);
