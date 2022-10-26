declare namespace DTO {
  interface DepositableAsset {
    address: string;
    symbol: string;
    // 이미지 경로는 symbol로 조합할 것이므로 추가 X
    depositedAmount: number;
    depositedValue: number;
    apy: number;
    apr: number;
  }
}
