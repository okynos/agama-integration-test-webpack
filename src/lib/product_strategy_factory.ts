import { ProductReleaseStrategy } from "../variants/product_release_strategy";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IProductTestStrategy {
}

// ts-prune-ignore-next
export class ProductStrategyFactory {
  public static create(productVersion: string): IProductTestStrategy {
    if (productVersion === "16.1") {
      return new ProductReleaseStrategy();
    }
  }
}
