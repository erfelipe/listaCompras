import * as SQLite from 'expo-sqlite';
import uuid from 'react-native-uuid';

export async function abrirBanco() {
  const db = await SQLite.openDatabaseAsync('unifei');
  return db;
}

export async function criarBanco() {
  const banco = await abrirBanco();
  const result = await banco.runAsync("CREATE TABLE IF NOT EXISTS compras (id TEXT PRIMARY KEY, produto TEXT NOT NULL, preco REAL, quantidade INTEGER); ")
  console.log(result.changes)
}

export async function excluirBanco() {
  await SQLite.deleteDatabaseAsync('unifei')
}

export async function inserirProdutos(prod, preco, quant) {
  let id = uuid.v4();
  const banco = await abrirBanco();
  const dados = await banco.runAsync("INSERT INTO compras (id, produto, preco, quantidade) values(?, ?, ?, ?)", [id, prod, preco, quant])
  console.log(dados.lastInsertRowId);
}

export async function listarProdutos() {
  const banco = await abrirBanco();
  const compras = await banco.getAllAsync("SELECT * FROM compras")
  return compras
  // console.log(compras);
}

