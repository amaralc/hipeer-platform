/* --------------------------------- IMPORTS ---------------------------------*/
import Sequelize, { Model } from 'sequelize';
/* --------------------------------- CONTENT ---------------------------------*/
class Request extends Model {
  static init(sequelize) {
    super.init(
      {
        solicitante: Sequelize.STRING,
        produto: Sequelize.STRING,
        quantidade: Sequelize.NUMBER,
        destino: Sequelize.STRING,
        data_pedido: Sequelize.DATE,
        data_entrega: Sequelize.DATE,
        created_by: Sequelize.INTEGER,
        updated_by: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
  }

  /** Método que salva referencia de 'id' de sala dentro da tabela de equipamentos  */
  static associate(models) {

    /** Coluna 'created-by' e 'updated_by' pertence a 'models.User' */
    this.belongsTo(
      models.User,
      {
        foreignKey: 'created_by',
        as: 'creator',
      },
      {
        foreignKey: 'updated_by',
        as: 'updater',
      }
    );
  }
}
/* --------------------------------- EXPORTS ---------------------------------*/
export default Request;