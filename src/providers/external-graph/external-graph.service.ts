import { Injectable, Global } from '@nestjs/common';

@Injectable()
@Global()
export class ExternalGraphService {
  getUrl(): string {
    return 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2';
  }

  getQuery(): string {
    return `
        query {
            pairs {
                id,
                token0 {
                    id
                    symbol
                    name
                    derivedETH
                },
                token1 {
                    id
                    symbol
                    name
                    derivedETH
                }
              }
        }
    `;
  }
}
