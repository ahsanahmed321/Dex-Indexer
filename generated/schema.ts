// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Liquidity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Liquidity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Liquidity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Liquidity", id.toString(), this);
    }
  }

  static load(id: string): Liquidity | null {
    return changetype<Liquidity | null>(store.get("Liquidity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenA(): Bytes | null {
    let value = this.get("tokenA");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set tokenA(value: Bytes | null) {
    if (!value) {
      this.unset("tokenA");
    } else {
      this.set("tokenA", Value.fromBytes(<Bytes>value));
    }
  }

  get tokenB(): Bytes | null {
    let value = this.get("tokenB");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set tokenB(value: Bytes | null) {
    if (!value) {
      this.unset("tokenB");
    } else {
      this.set("tokenB", Value.fromBytes(<Bytes>value));
    }
  }

  get amountA(): BigInt | null {
    let value = this.get("amountA");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set amountA(value: BigInt | null) {
    if (!value) {
      this.unset("amountA");
    } else {
      this.set("amountA", Value.fromBigInt(<BigInt>value));
    }
  }

  get amountB(): BigInt | null {
    let value = this.get("amountB");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set amountB(value: BigInt | null) {
    if (!value) {
      this.unset("amountB");
    } else {
      this.set("amountB", Value.fromBigInt(<BigInt>value));
    }
  }
}
