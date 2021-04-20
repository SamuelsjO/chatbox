import { Settings } from "http2";
import { EntityRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";

@EntityRepository(Setting)
class SettingsRepository extends Repository<Setting> {

}

export { SettingsRepository }