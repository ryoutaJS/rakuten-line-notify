import { NextResponse } from "next/server";

/**
 * ローカル環境用のモックAPI
 * @return 楽天の商品データ
 */
export function GET() {
  console.log("fetch_products")
  return NextResponse.json({
    products: [
      {
        genreId: "212272",
        itemName:
          "デロンギ　マルチダイナミックヒーター[~13畳まで/1500W] Wi-Fiモデル【iOS/Android対応】　MDHAA15WIFI",
        itemPrice: 65770,
        itemUrl: "https://item.rakuten.co.jp/r-kojima/4988371012685/",
        imageUrl:
          "https://thumbnail.image.rakuten.co.jp/@0_mall/r-kojima/cabinet/n0000000532/4988371012685_1.jpg?",
      },
      {
        genreId: "205726",
        itemName:
          "デスク 昇降 高さ調節 昇降デスク 昇降式デスク 電動 FlexiSpot ew8 スタンディングデスク 学習机 シンプル 立ち机 昇降デスク 昇降テーブル 昇降式テーブル パソコンデスク 電動デスク 高さ調整 幅120 パソコン",
        itemPrice: 46800,
        itemUrl: "https://item.rakuten.co.jp/loctek/eg8/",
        imageUrl:
          "https://thumbnail.image.rakuten.co.jp/@0_mall/loctek/cabinet/standingdesku/ew8-2/ew8-2-newmain.jpg?",
      },
      {
        genreId: "565105",
        itemName: "ANKER アンカー ロボット掃除機 Eufy ROBOVAC 30C T2118521",
        itemPrice: 24800,
        itemUrl: "https://item.rakuten.co.jp/hikaritv/2010123370/",
        imageUrl:
          "https://thumbnail.image.rakuten.co.jp/@0_mall/hikaritv/cabinet/plala/201/01233/2010123370_k.jpg?",
      },
      {
        genreId: "110105",
        itemName:
          "DELL｜デル USB-C接続 PCモニター Sシリーズ シルバー S2722QC-R [27型 /4K(3840×2160） /ワイド]",
        itemPrice: 52800,
        itemUrl: "https://item.rakuten.co.jp/biccamera/4580691190090/",
        imageUrl:
          "https://thumbnail.image.rakuten.co.jp/@0_mall/biccamera/cabinet/product/6720/00000009603141_a01.jpg?",
      },
      {
        genreId: "101766",
        itemName:
          "グリーンハウス｜GREEN HOUSE GH-SVMA-WH 低温調理器 GH-SVMAシリーズ ホワイト",
        itemPrice: 11560,
        itemUrl: "https://item.rakuten.co.jp/biccamera/4511677117275/",
        imageUrl:
          "https://thumbnail.image.rakuten.co.jp/@0_mall/biccamera/cabinet/product/4127/00000006348908_a01.jpg?",
      },
      {
        genreId: "408076",
        itemName:
          "オムロン OMRON 公式 体重体組成計 デジタル HBF-230T-SW シャイニーホワイト 体重計 体組成計 体脂肪 基礎代謝 骨格筋率 スマホ スマホ連動 iPhone 連動 アプリ Bluetooth ブルートゥース 乗るだけ 自動 高精度 ヘルスメーター",
        itemPrice: 9980,
        itemUrl: "https://item.rakuten.co.jp/life-rhythm/hbf-230t-sw/",
        imageUrl:
          "https://thumbnail.image.rakuten.co.jp/@0_mall/life-rhythm/cabinet/item01/hbf-230t-sw_01_v2.jpg?",
      },
      {
        genreId: "212272",
        itemName:
          "デロンギ　マルチダイナミックヒーター[~13畳まで/1500W] Wi-Fiモデル【iOS/Android対応】　MDHAA15WIFI",
        itemPrice: 65770,
        itemUrl: "https://item.rakuten.co.jp/r-kojima/4988371012685/",
        imageUrl:
          "https://thumbnail.image.rakuten.co.jp/@0_mall/r-kojima/cabinet/n0000000532/4988371012685_1.jpg?",
      },
      {
        genreId: "205726",
        itemName:
          "デスク 昇降 高さ調節 昇降デスク 昇降式デスク 電動 FlexiSpot ew8 スタンディングデスク 学習机 シンプル 立ち机 昇降デスク 昇降テーブル 昇降式テーブル パソコンデスク 電動デスク 高さ調整 幅120 パソコン",
        itemPrice: 46800,
        itemUrl: "https://item.rakuten.co.jp/loctek/eg8/",
        imageUrl:
          "https://thumbnail.image.rakuten.co.jp/@0_mall/loctek/cabinet/standingdesku/ew8-2/ew8-2-newmain.jpg?",
      },
      {
        genreId: "565105",
        itemName: "ANKER アンカー ロボット掃除機 Eufy ROBOVAC 30C T2118521",
        itemPrice: 24800,
        itemUrl: "https://item.rakuten.co.jp/hikaritv/2010123370/",
        imageUrl:
          "https://thumbnail.image.rakuten.co.jp/@0_mall/hikaritv/cabinet/plala/201/01233/2010123370_k.jpg?",
      },
      {
        genreId: "110105",
        itemName:
          "DELL｜デル USB-C接続 PCモニター Sシリーズ シルバー S2722QC-R [27型 /4K(3840×2160） /ワイド]",
        itemPrice: 52800,
        itemUrl: "https://item.rakuten.co.jp/biccamera/4580691190090/",
        imageUrl:
          "https://thumbnail.image.rakuten.co.jp/@0_mall/biccamera/cabinet/product/6720/00000009603141_a01.jpg?",
      },
      {
        genreId: "101766",
        itemName:
          "グリーンハウス｜GREEN HOUSE GH-SVMA-WH 低温調理器 GH-SVMAシリーズ ホワイト",
        itemPrice: 11560,
        itemUrl: "https://item.rakuten.co.jp/biccamera/4511677117275/",
        imageUrl:
          "https://thumbnail.image.rakuten.co.jp/@0_mall/biccamera/cabinet/product/4127/00000006348908_a01.jpg?",
      },
    ],
  });
}
