import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm"
import { UUID } from "typeorm/driver/mongodb/bson.typings";
import { v4 as uuid } from "uuid"

@Entity("usuarios")
class User {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column('varchar', { length: 200, nullable: false })
  nome: String;

  @Column('varchar', { length: 200 })
  email: String;

  @Column('varchar', { length: 50 })
  data_nascimento: String;

  @Column('varchar', { length: 200 })
  endereco: String;

  constructor() {
    if (!this.id) {
      this.id = uuid()

    }
  }

}

export default User