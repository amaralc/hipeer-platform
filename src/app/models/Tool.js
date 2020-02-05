/* --------------------------------- IMPORTS ---------------------------------*/
import Sequelize, { Model } from 'sequelize';

/* --------------------------------- CONTENT ---------------------------------*/
/**
 * Cria classe Tool extendendo os metodos da classe Model, da dependencia
 * 'sequelize'
 */
class Tool extends Model {
  /**
   * Metodo estatico que sera chamado automaticamente pelo sequelize
   */
  static init(sequelize) {
    /**
     * Chama metodo init da classe superior (Model) enviando colunas da base
     * de dados e envia somente o que o usuario vai fornecer como input.
     * (chave primaria, etc, nao sao necessarias)
     */
    super.init(
      {
        tool: Sequelize.STRING,
        fit_type: Sequelize.STRING,
        milling_cutter_type: Sequelize.STRING,
        external_diameter: Sequelize.DOUBLE,
        thickness: Sequelize.DOUBLE,
        internal_diameter: Sequelize.DOUBLE,
      },
      {
        /*
         ** Argumento que sera enviado pelo loader de models
         */
        sequelize,
      }
    );
  }
}

/* --------------------------------- EXPORTS ---------------------------------*/
export default Tool;