import * as DataLoader from 'dataloader';
import { Transaction } from "../entity/Transaction";

type BatchTransaction = (ids: string[]) => Promise<Transaction[]>;

const batchTransactions: BatchTransaction = async ids => {
  // 1 sql call
  // to get all transactions
  const transactions = await Transaction.findByIds(ids);

  const transactionMap: { [key: string]: Transaction } = {};
  transactions.forEach(t => {
    transactionMap[t.id] = t;
  });

  return ids.map(id => transactionMap[id]);
};

export const transactionLoader = () => new DataLoader<string, Transaction>(batchTransactions as any);