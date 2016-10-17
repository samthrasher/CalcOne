class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string  :username,         null: false
      t.string  :email,            null: false
      t.integer :rating,           null: false,  default: 1200
      t.string  :password_digest,  null: false
      t.string  :session_token
      t.string  :profile_pic_url

      t.timestamps
    end

    add_index :users, :email,         unique: true
    add_index :users, :username,      unique: true
    add_index :users, :session_token, unique: true
  end
end
