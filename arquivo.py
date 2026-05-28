import sqlite3
conn = sqlite3.connect('database.db')
cursor = conn.cursor()
cursor.execute("""
 CREATE TABLE IF NOT EXIST usuarios (
    id INTENGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    email TEXT
)
""")

# Inserir dados de teste
cursor.execute("INSERT INTO usuarios (nome, email) VALUES (?, ?)", ("Lucas", "lucas@gmail.com"))
cursor.execute("INSERT INTO usuarios (nome, email) VALUES (?, ?)", ("Steh", "stephany@gmail.com"))

conn.commit()
conn.close()