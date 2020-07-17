export type LocationDetail = {
  "address": {
    "address1": string,
    "address2": string,
    "aptOrSuite": string,
    "eaterFormattedAddress": string,
    "subtitle": string,
    "title": string,
    "uuid": string,
  },
  "latitude": number,
  "longitude": number,
  "reference": string,
  "referenceType": string,
  "type": string,
  "source": string,
  "addressComponents": {
    "countryCode": string,
    "firstLevelSubdivisionCode": string,
    "city": string,
    "postalCode": string,
  }
}

export type LocationStoreMap = Map<LocationDetail, string[]>

export type StoreDetail = {
  "title": string,
  "sanitizedTitle": string
  "uuid": string
  "cityId": number,
  "priceBucket": string
  "location": {
    "address": string
    "streetAddress": string
    "city": string
    "country": string
    "postalCode": string
    "region": string
    "latitude": number,
    "longitude": number
  },
  "phoneNumber": string
  "rating": null | {
    "ratingValue": number,
    "reviewCount": string,
  },
}

//response sample
const storeDetailSample = {
  "sectionEntitiesMap": {
    "61b993c0-fabb-58de-a91b-7a1888829769": {
      "5ad04c1f-8767-51f1-b8ec-889191087626": {
        "description": "ココアや炒ったナッツがほのかに香る、軽めのコクにほどよい酸味が特徴です。\n特別な器具を使うことなく手軽に味わえるドリップタイプのコーヒーです。ドリップタイプ(9g×6袋) ※Starbucks Rewards™には対応しておりません。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/dd5eeb99-24b0-46a8-9c7a-21228420bcc8.jpeg",
        "price": 72300,
        "title": "スターバックス オリガミ® パーソナルドリップ® コーヒー スターバックス ライトノート ブレンド®",
        "uuid": "5ad04c1f-8767-51f1-b8ec-889191087626",
        "nutritionalInfo": {
          "allergens": [
            ""
          ],
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": false
      },
      "b30a00c7-350f-55ad-93ea-6726aa293d5d": {
        "description": "最も人気のあるエスプレッソビバレッジ【Uber Eatsでのカスタマイズに関して：その他のカスタマイズはお受けいたしません。】※その他の無料カスタマイズはお受けいたしません。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。※12個以上のドリンクのオーダーの場合は一度に短時間でのお届けが難しいため、キャンセルとなる場合がございます。写真はイメージです。※低脂肪タイプはミルクと無脂肪乳をブレンドしています。※ブレべはミルクとホイップ用クリーム(乳脂肪と植物性脂肪を含むクリーム)をブレンドしています。※シロップには香料を使用しております。トールサイズ、エキストラホットでの提供です。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/ccd5cfc7-e759-40c0-b99a-5dd8a899ebaf.jpeg",
        "price": 41000,
        "title": "スターバックス ラテ (ホット) Caffè Latte (Hot)",
        "uuid": "b30a00c7-350f-55ad-93ea-6726aa293d5d",
        "nutritionalInfo": {
          "allergens": [
            ""
          ],
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": true
      },
      "8a3c53bc-a19f-5e02-9ac0-66dc97c27f5c": {
        "description": "ソフトな食感のクッキー生地には、小麦の香ばしさが感じられるよう全粒粉を入れ、砂糖の一部にはブラウンシュガーを使い、コクのある甘さをプラスしています。風味豊かなスターバックスオリジナルのチョコレートチャンクがごろごろ入っていて、どこを食べてもチョコレートの味わいを存分に楽しめます。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/9948a0c6-eef0-4fcc-894c-63dad045035f.jpeg",
        "price": 20500,
        "title": "チョコレートチャンククッキー Chocolate Chunk Cookie",
        "uuid": "8a3c53bc-a19f-5e02-9ac0-66dc97c27f5c",
        "nutritionalInfo": {
          "allergens": [
            ""
          ],
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": false
      },
      "dbecfe93-36d7-547b-9491-92723323e019": {
        "description": "ヨーグルトは、無脂肪ヨーグルトをベースにストロベリー果肉とブルーベリー果汁・クランベリー果汁を組み合わせたミックスベリー味です。ヨーグルトに合わせるストロベリーグラノーラは、大麦とオーツ麦をベースにストロベリー果汁で風味を付けたものにドライクランベリー・ドライカシスを合わせました。\nフルーツの甘味が楽しめる、朝食にぴったりなグラノーラです。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。写真はイメージです。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/75ae3890-45dc-4feb-a757-23482938825f.jpeg",
        "price": 31300,
        "title": "ベリーヨーグルト＆ベリーグラノーラ",
        "uuid": "dbecfe93-36d7-547b-9491-92723323e019",
        "nutritionalInfo": {
          "allergens": "",
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": false
      },
      "326214dc-1e92-58ff-a3b2-febba0f39ac3": {
        "description": "とろけるようなチョコレートの甘さが楽しめる豊かな味わい。ミルクを注ぐだけで、いつでも、どこでもスターバックスのカフェ モカのような味わいが簡単にお楽しみいただけるスティックタイプです。 ※Starbucks Rewards™には対応しておりません。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/581ad53a-4612-4f24-b6ad-65a9b691e366.jpeg",
        "price": 61500,
        "title": "スターバックス ヴィア® コーヒーエッセンス モカ スティックタイプ (10g×5本)",
        "uuid": "326214dc-1e92-58ff-a3b2-febba0f39ac3",
        "nutritionalInfo": {
          "allergens": [
            ""
          ],
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": false
      },
      "82362be6-8715-5a28-b601-e58fc2f698d6": {
        "description": "エスプレッソに特別にろ過したウォーターを加えて【Uber Eatsでのカスタマイズに関して：その他のカスタマイズはお受けいたしません。】※その他の無料カスタマイズはお受けいたしません。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。※12個以上のドリンクのオーダーの場合は一度に短時間でのお届けが難しいため、キャンセルとなる場合がございます。写真はイメージです。※シロップには香料を使用しております。紙ストローをご使用上の注意：ご使用中にかゆみなどの症状が出た場合はご使用をお控え頂きますようお願い致します。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/8ed1fb89-fc2c-4672-9280-04828e7186d6.jpeg",
        "price": 37800,
        "title": "カフェ アメリカーノ (アイス) Caffè Americano (Iced)",
        "uuid": "82362be6-8715-5a28-b601-e58fc2f698d6",
        "nutritionalInfo": {
          "allergens": [
            ""
          ],
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": true
      },
      "0f16642e-b2b6-5adb-8271-912468cc74c3": {
        "description": "シンプルに素材の風味を活かした、バターなどを使用した香ばしくて甘すぎない生地とシュガーの食感と、甘い香りが特徴です。 ホイップクリームやキャラメルソース、チョコレートソースなどをトッピングしてお楽しみください。 ※温めてのお届けはお受けしておりませんので、ご了承ください。 ※ラッピングはお受けしておりませんので、ご了承ください。 ※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。写真はイメージです。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/42db662d-c1c7-4cd1-bf98-7a9164386ab9.jpeg",
        "price": 27000,
        "title": "アメリカンワッフル American Waffle",
        "uuid": "0f16642e-b2b6-5adb-8271-912468cc74c3",
        "nutritionalInfo": {
          "allergens": [
            ""
          ],
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": false
      },
      "8802b626-0c9f-53fa-b7b7-41e95f4ccb40": {
        "description": "ハイビスカス、シナモン、ドライアップル、リコリス、レモングラスがブレンドされた鮮やかな赤色のノンカフェインのハーブティーです。【Uber Eatsでのカスタマイズに関して：その他のカスタマイズはお受けいたしません。】※その他の無料カスタマイズはお受けいたしません。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。※12個以上のドリンクのオーダーの場合は一度に短時間でのお届けが難しいため、キャンセルとなる場合がございます。写真はイメージです。紙ストローをご使用上の注意：ご使用中にかゆみなどの症状が出た場合はご使用をお控え頂きますようお願い致します。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/d7a60c78-cec3-4973-a422-ffbb6eb9423f.jpeg",
        "price": 36700,
        "title": "アイスティー (パッション) Iced Passion Tea (Iced)",
        "uuid": "8802b626-0c9f-53fa-b7b7-41e95f4ccb40",
        "nutritionalInfo": {
          "allergens": [
            ""
          ],
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": true
      },
      "09addb47-e6df-56d3-8589-ec91fb744fac": {
        "description": "ブルーベリーソースとブルーベリーパウダーを練り込んだ生地に、大粒でジューシーなブルーベリーを入れて焼き上げました。\n優しい甘さのスコーン生地に、ほど良い甘さと酸味のブルーベリーの風味がマッチします。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。写真はイメージです。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/1311d482-ecce-4397-974a-b9b84c361388.jpeg",
        "price": 29100,
        "title": "ブルーベリースコーン Blueberry Scone",
        "uuid": "09addb47-e6df-56d3-8589-ec91fb744fac",
        "nutritionalInfo": {
          "allergens": "",
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": false
      },
      "7d92ebab-66a4-59b6-87c5-5e5288ee13db": {
        "description": "全粒粉入りのイングリッシュマフィンにトマトソースを塗り、ソーセージパティ・スクランブルエッグ・チェダーチーズを挟みました。外側のさっくりした食感と、中の生地のもっちり感、全粒粉の香ばしさが特長のイングリッシュマフィンに、しっかりとした食感のソーセージパティ、とろけるようなスクランブルエッグの組み合わせはボリューム感もほどよく、朝食にぴったりのサンドイッチです。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。写真はイメージです。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/9617ae89-bb2e-469f-b1f5-5b91845c904d.jpeg",
        "price": 41000,
        "title": "あらびきソーセージ＆スクランブルエッグ イングリッシュマフィン Arabiki Sausage & Scrambled Eggs English Muffin",
        "uuid": "7d92ebab-66a4-59b6-87c5-5e5288ee13db",
        "nutritionalInfo": {
          "allergens": "",
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": false
      },
      "9ce18ca6-965f-5ba8-a090-65490ca69986": {
        "description": "チョコレートシロップにミルクが調和し、やさしい甘さに仕上げました。【Uber Eatsでのカスタマイズに関して：その他のカスタマイズはお受けいたしません。】※その他の無料カスタマイズはお受けいたしません。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。※12個以上のドリンクのオーダーの場合は一度に短時間でのお届けが難しいため、キャンセルとなる場合がございます。写真はイメージです。※低脂肪タイプはミルクと無脂肪乳をブレンドしています。※ブレべはミルクとホイップ用クリーム(乳脂肪と植物性脂肪を含むクリーム)をブレンドしています。※シロップには香料を使用しております。紙ストローをご使用上の注意：ご使用中にかゆみなどの症状が出た場合はご使用をお控え頂きますようお願い致します。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/3eefee99-f299-41cf-8c75-da11e1332c0f.jpeg",
        "price": 46400,
        "title": "ココア (アイス) Cocoa (Iced)",
        "uuid": "9ce18ca6-965f-5ba8-a090-65490ca69986",
        "nutritionalInfo": {
          "allergens": [
            ""
          ],
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": true
      },
      "14638bec-353d-5cdb-a220-f86d02630d9c": {
        "description": "\"ココアパウダーを練りこんだワッフル生地に、ソフトなキャラメルフィリングをサンドしたチョコレートフレーバーのキャラメルワッフルです。濃厚な味わいのキャラメルフィリングにバニラビーンズの豊かな風味がアクセントをプラスしています。コーヒーと一緒にちょっと甘いものが食べたい時にぴったりです。\nあたたかいコーヒーを注いだカップの上にしばらく置くと、中のキャラメルがとろけてさらにおいしくお召し上がりいただけます。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。写真はイメージです。\n\"",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/3db8a1af-ad91-4a9f-a116-b380eebd7280.jpeg",
        "price": 18300,
        "title": "チョコレートキャラメルワッフル Chocolate Caramel Waffle",
        "uuid": "14638bec-353d-5cdb-a220-f86d02630d9c",
        "nutritionalInfo": {
          "allergens": [
            ""
          ],
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": false
      },
      "1bfd5a50-3f1f-5da7-8e80-d620c8d367ff": {
        "description": "ピンクグレープフルーツなどの様々なシトラスに国産のゆず果皮を組み合わせ、酸味を抑えながらも豊かな風味に仕上げたティービバレッジ。ピンクグレープフルーツや桃の果肉感、ゆずの皮の食感が特徴です。【Uber Eatsでのカスタマイズに関して：その他のカスタマイズはお受けいたしません。】※その他の無料カスタマイズはお受けいたしません。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。※12個以上のドリンクのオーダーの場合は一度に短時間でのお届けが難しいため、キャンセルとなる可能性がございます。写真はイメージです。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/e1cb25a2-038d-4977-8a50-e1852afca288.jpeg",
        "price": 49600,
        "title": "ゆずシトラス＆ティー (ホット) Yuzu Citrus & Tea (Hot/Tall)",
        "uuid": "1bfd5a50-3f1f-5da7-8e80-d620c8d367ff",
        "nutritionalInfo": {
          "allergens": "",
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": true
      },
      "e6fda3cc-6127-5670-ab1e-58ef8d12f890": {
        "description": "クリームチーズフィリングを包んだ生地に、ゴーダ・モッツァレラ・チェダー・パルメザンの4種類のチーズをトッピングしてふんわりと焼き上げました。フィリングとトッピングを合わせて5種類のチーズを使用しています。\n米粉やタピオカでんぷんでもちもち感を出した生地には、チーズとのバランスを考えて香ばしさや食感が楽しめる全粒粉を加えました。\n朝食やちょっと小腹が空いた時にぴったりのサイズ感です。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。写真はイメージです。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/df1fe6fe-4334-4929-9e18-bde600714eac.jpeg",
        "price": 23700,
        "title": "もちもち５種のチーズブレッド Mochi Mochi Five Cheese Bread",
        "uuid": "e6fda3cc-6127-5670-ab1e-58ef8d12f890",
        "nutritionalInfo": {
          "allergens": "",
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": false
      },
      "369ee1dd-375c-55aa-9f17-4133835a3fd0": {
        "description": "カカオや炒ったナッツのようなほのかな香ばしさに、やわらかな酸味をあわせ持つコーヒー。丸みをおびた口あたりとなめらかな後味が特徴です。特別な器具を使うことなく手軽に味わえるドリップタイプのコーヒーです。ドリップタイプ(9g×6袋) ※Starbucks Rewards™には対応しておりません。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/5188875c-cf21-4778-852a-4c63b5c37583.jpeg",
        "price": 72300,
        "title": "スターバックス オリガミ® パーソナルドリップ® コーヒー パイクプレイス® ロースト",
        "uuid": "369ee1dd-375c-55aa-9f17-4133835a3fd0",
        "nutritionalInfo": {
          "allergens": [
            ""
          ],
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": false
      },
      "f62bded0-88d3-5cba-8409-93a6a7a7bcac": {
        "description": "スターバックス リザーブ® ロースタリー 東京でロースターが心をこめて焙煎したコーヒー。スターバックス リザーブ® ロースタリー 東京のロースターが焙煎した、なめらかで深みのあるスマトラ産コーヒーにラテンアメリカ産コーヒーをブレンドした、まろやかで心温まるコーヒーです。※Starbucks Rewards™には対応しておりません。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/595be75a-9731-4942-ab08-4074f1503074.jpeg",
        "price": 133900,
        "title": "TOKYO ロースト TOKYO_ROAST",
        "uuid": "f62bded0-88d3-5cba-8409-93a6a7a7bcac",
        "nutritionalInfo": {
          "allergens": [
            ""
          ],
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": true
      },
      "03773b9a-d380-5866-85e7-199bf343fe39": {
        "description": "外側はザクッと、中はしっとりとした食感が特長の石窯で焼き上げたフィローネに、ハム・マリボーチーズ・オリーブオイルをサンドしました。\nしっかりとスモークされた味わい深く、香り高いハムの旨味とまろやかなチーズのコクが口いっぱいに広がります。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。写真はイメージです。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/2c0bb950-558d-4141-8831-5b5e070d25de.jpeg",
        "price": 45300,
        "title": "ハム&マリボーチーズ 石窯フィローネ Ham & Maribo Cheese Filone ",
        "uuid": "03773b9a-d380-5866-85e7-199bf343fe39",
        "nutritionalInfo": {
          "allergens": [
            ""
          ],
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": false
      },
      "46da21ca-1a39-5701-b72b-a3d69be7d9f1": {
        "description": "バターやミルクなどを使用した、シンプルな素材の味わいと香りが漂うビスケットです。生地の層を多くして軽さを出すことで、パイのようなザクザクとした食感に仕上げました。\n※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。写真はイメージです。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/9bd3455b-bb64-41cc-943e-ed455ff79ae9.jpeg",
        "price": 28000,
        "title": "バターミルクビスケット Buttermilk Biscuits",
        "uuid": "46da21ca-1a39-5701-b72b-a3d69be7d9f1",
        "nutritionalInfo": {
          "allergens": [
            ""
          ],
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": false
      },
      "960a77d6-0081-557c-9623-0c1bbc41b9e1": {
        "description": "アイス ホワイト モカ(エスプレッソ ショット追加)、ミール、ベーカリーのセットです。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。※12個以上のドリンクのオーダーの場合は一度に短時間でのお届けが難しいため、キャンセルとなる場合がございます。写真はイメージです。紙ストローをご使用上の注意：ご使用中にかゆみなどの症状が出た場合はご使用をお控え頂きますようお願い致します。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/bb4e9df7-bf1a-4cec-8229-c3b0af8f360e.jpeg",
        "price": 118700,
        "title": "スターバックスミールB Starbucks Meal B",
        "uuid": "960a77d6-0081-557c-9623-0c1bbc41b9e1",
        "nutritionalInfo": {
          "allergens": "",
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": true
      },
      "c57b215e-2beb-5e26-a527-22d6c9c908a8": {
        "description": "高品質のアラビカ種コーヒー豆を使用したドリップコーヒーにスチームしたミルクを注ぎ、さらにふわふわのフォームミルクをのせました。【Uber Eatsでのカスタマイズに関して：その他のカスタマイズはお受けいたしません。】※その他の無料カスタマイズはお受けいたしません。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。※12個以上のドリンクのオーダーの場合は一度に短時間でのお届けが難しいため、キャンセルとなる場合がございます。写真はイメージです。※低脂肪タイプはミルクと無脂肪乳をブレンドしています。※ブレべはミルクとホイップ用クリーム(乳脂肪と植物性脂肪を含むクリーム)をブレンドしています。トールサイズ、エキストラホットで提供です。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/6aaaca97-e7e4-45bc-a06b-1d5f3244dfc6.jpeg",
        "price": 41000,
        "title": "カフェ ミスト (ホット) Caffè Misto (Hot)",
        "uuid": "c57b215e-2beb-5e26-a527-22d6c9c908a8",
        "nutritionalInfo": {
          "allergens": [
            ""
          ],
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": true
      },
      "51cf7bee-64eb-58af-8869-3066d471d17a": {
        "description": "バターと生クリームを入れたしっとりとした生地に、香り豊かなシナモンフィリングを丁寧に巻き込んでじっくりと焼き上げ、さらにクリームチーズ入りのフォンダンをかけて仕上げました。生地とシナモンの豊かな風味、甘いフォンダンの味わいを、ほど良いサイズ感でお楽しみいただけます。ぜひ、コーヒーと一緒にお召し上がりください。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。写真はイメージです。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/4b7d0037-5982-4c9c-bdd5-8ff0b7a07635.jpeg",
        "price": 29100,
        "title": "シナモンロール Cinnamon Roll",
        "uuid": "51cf7bee-64eb-58af-8869-3066d471d17a",
        "nutritionalInfo": {
          "allergens": [
            ""
          ],
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": false
      },
      "91c66af8-b5db-5f40-a65e-362a6d8dea14": {
        "description": "厳選された香り高いドリップコーヒー【Uber Eatsでのカスタマイズに関して：その他のカスタマイズはお受けいたしません。】※その他の無料カスタマイズはお受けいたしません。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。※12個以上のドリンクのオーダーの場合は一度に短時間でのお届けが難しいため、キャンセルとなる可能性がございます。写真はイメージです。紙ストローをご使用上の注意：ご使用中にかゆみなどの症状が出た場合はご使用をお控え頂きますようお願い致します。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/783a111f-817e-4fd4-9a06-97ec2172ab6c.jpeg",
        "price": 35600,
        "title": "アイス コーヒー Drip Coffee (Iced)",
        "uuid": "91c66af8-b5db-5f40-a65e-362a6d8dea14",
        "nutritionalInfo": {
          "allergens": [
            ""
          ],
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": true
      },
      "034190c5-3cf2-59d5-a1f3-e5ebc21123d1": {
        "description": "ほろ苦い抹茶をラテに仕上げ深い味わいに【Uber Eatsでのカスタマイズに関して：その他のカスタマイズはお受けいたしません。】※その他の無料カスタマイズはお受けいたしません。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。※12個以上のドリンクのオーダーの場合は一度に短時間でのお届けが難しいため、キャンセルとなる可能性がございます。写真はイメージです。※低脂肪タイプはミルクと無脂肪乳をブレンドしています。※ブレべはミルクとホイップ用クリーム(乳脂肪と植物性脂肪を含むクリーム)をブレンドしています。トールサイズ、エキストラホットでの提供です。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/77061834-fcca-4e41-a164-29c04a5cefda.jpeg",
        "price": 47500,
        "title": "抹茶ティーラテ (ホット) Matcha Tea Latte (Hot)",
        "uuid": "034190c5-3cf2-59d5-a1f3-e5ebc21123d1",
        "nutritionalInfo": {
          "allergens": [
            ""
          ],
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": true
      },
      "32f5b689-c9cb-5ceb-8ed5-b1853ddfbd96": {
        "description": "卵でふんわりと優しい風味を出しつつ、焦がしバター・きび砂糖でコクを加えました。大きな円で焼いたバウムクーヘンを扇形にカットすることで、水分が飛びにくくしっとりとした食感に仕上げています。しっとりとコクがありながら、隠し味にアプリコットジャムを加えることで、後味軽やかな食べやすいバウムクーヘンができあがりました。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。写真はイメージです。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/2ee64c7f-ac01-4c55-8a20-e6844b296d5a.jpeg",
        "price": 22600,
        "title": "バウムクーヘン Baumkuchen ",
        "uuid": "32f5b689-c9cb-5ceb-8ed5-b1853ddfbd96",
        "nutritionalInfo": {
          "allergens": [
            ""
          ],
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": false
      },
      "d61ebf24-ea49-52f4-aa53-2b160d674e1d": {
        "description": "コーヒーにぴったりのシンプルなドーナツ※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。写真はイメージです。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/68b67e87-6651-4a68-84e3-4ff89f6640a6.jpeg",
        "price": 24800,
        "title": "シュガードーナツ Sugar Donut",
        "uuid": "d61ebf24-ea49-52f4-aa53-2b160d674e1d",
        "nutritionalInfo": {
          "allergens": [
            ""
          ],
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": false
      },
      "16f8ac56-1a73-5d16-84c0-84cb5ef91b0b": {
        "description": "カラメルを感じさせるリッチで深みのある力強い風味のコーヒーです。いつでも、どこでもお楽しみいただけるスティックタイプのコーヒーです。 ※Starbucks Rewards™には対応しておりません。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/d596490a-7f9c-4afe-8061-5a784fe58ae8.jpeg",
        "price": 102600,
        "title": "スターバックス ヴィア® コーヒーエッセンス イタリアン ロースト スティックタイプ (2.1g×12本)",
        "uuid": "16f8ac56-1a73-5d16-84c0-84cb5ef91b0b",
        "nutritionalInfo": {
          "allergens": [
            ""
          ],
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": false
      },
      "5a131dcb-df22-58d7-b663-cdf25dd3142b": {
        "description": "レモンピール・ホワイトチョコチャンク・ジンジャーを練り込んだ生地の上に、フレーク状のクレープ生地と砕いたメレンゲを混ぜたレモンペースト、レモンクリームチーズフィリングを順番に重ね、ホワイトコーティングで仕上げました。しっとり、ぎゅっと詰まった食感と濃厚な味わいが特長です。ちょうど良いサイズ感で、コーヒーブレイクにおすすめです。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。写真はイメージです。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/fab97e8e-e23e-4567-ae7b-1a23a196d1ab.jpeg",
        "price": 29100,
        "title": "レモンクリームチーズバー Lemon Cream Cheese Bar",
        "uuid": "5a131dcb-df22-58d7-b663-cdf25dd3142b",
        "nutritionalInfo": {
          "allergens": "",
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 8640000000,
        "classifications": [],
        "hasCustomizations": false
      },
      "edadfd4a-acdd-57d3-a0d5-7af550102cae": {
        "description": "低脂肪ですっきりとした味わいのヨーグルトに、グラノーラのメイプル風味の優しい甘みが絶妙にマッチする、朝食にぴったりな組み合わせです。グラノーラにはバナナチップだけでなく、カボチャの種とアーモンドも加え、様々な素材の味わいを楽しめるようにしています。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。写真はイメージです。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/dab2f577-aeed-4c84-9389-7eeacf50fc59.jpeg",
        "price": 31300,
        "title": "ヨーグルト＆バナナグラノーラ",
        "uuid": "edadfd4a-acdd-57d3-a0d5-7af550102cae",
        "nutritionalInfo": {
          "allergens": "",
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": false
      },
      "925b77bd-dcf4-574a-808e-0d466234cf1f": {
        "description": "5種類の茶葉からお選びいただけるティー ラテ【Uber Eatsでのカスタマイズに関して：その他のカスタマイズはお受けいたしません。】※その他の無料カスタマイズはお受けいたしません。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。※12個以上のドリンクのオーダーの場合は一度に短時間でのお届けが難しいため、キャンセルとなる可能性がございます。写真はイメージです。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/cb740e6c-15d0-4204-a2b4-3820a1a81580.jpeg",
        "price": 47500,
        "title": "ティーラテ (ホット) Tea Latte (Hot/Tall)",
        "uuid": "925b77bd-dcf4-574a-808e-0d466234cf1f",
        "nutritionalInfo": {
          "allergens": "",
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": true
      },
      "ff21ae46-0a9a-5b70-ba85-0c2abbf0cb8d": {
        "description": "デニッシュ生地に、トマトソース・ラタトゥイユフィリングを乗せ、ナス・赤ピーマン・黄ピーマン・ズッキーニ・モッツァレラチーズ・パルメザンチーズ・ブラックペッパーをトッピングして焼き上げました。デニッシュ生地は、具材をのせる前にあらかじめ焼き、トッピング後にもこんがりと焼き上げることで、よりザクっと香ばしい食感を楽しめるようにしています。野菜の美味しさを存分に味わえるデニッシュは朝食にもぴったりです。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。写真はイメージです。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/d32d4525-f53a-41f2-a8a1-c3b9374a3ca9.jpeg",
        "price": 30200,
        "title": "夏野菜デニッシュ Summer Vegetable Danish",
        "uuid": "ff21ae46-0a9a-5b70-ba85-0c2abbf0cb8d",
        "nutritionalInfo": {
          "allergens": "",
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": false
      },
      "3bb39da4-359c-57b2-9c17-fef840687071": {
        "description": "宇治抹茶の味わいを引き立たせるため、グラニュー糖のほかにもきび砂糖を使用し、優しい甘さと抹茶の苦みをバランスよく仕上げました。生クリームを入れてじっくり焼き上げた、しっとりとした食感をお楽しみください。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。写真はイメージです。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/212426f8-8d89-44c4-b595-7f76321e681b.jpeg",
        "price": 22600,
        "title": "抹茶バウムクーヘン Matcha Baumkuchen",
        "uuid": "3bb39da4-359c-57b2-9c17-fef840687071",
        "nutritionalInfo": {
          "allergens": "",
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": false
      },
      "a91eb7da-c592-5b3f-a674-4628339cee9d": {
        "description": "発酵種を使用した生地に、ブランデーに漬け込んだクランベリー・レーズン・オレンジピールとクルミ・皮付きローストアーモンド、アクセントとしてシナモンを練りこみ焼き上げました。\n噛むほどにフルーツのほのかな酸味や甘み、ナッツの香ばしさやコク、生地の旨味が感じられます。時間がない日の朝食や小腹がすいたときにおすすめです。※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。写真はイメージです。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/c970db3c-0a22-4362-91a8-01bd25415c95.jpeg",
        "price": 20500,
        "title": "ナッツ＆フルーツバー Nuts & Fruits Bar ",
        "uuid": "a91eb7da-c592-5b3f-a674-4628339cee9d",
        "nutritionalInfo": {
          "allergens": "",
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": false
      },
      "58dfab4e-c827-5c22-b497-3d6d169596f3": {
        "description": "熱を加えずに１４時間かけてゆっくりと水で抽出したコールドブリューコーヒー。【Uber Eatsでのカスタマイズに関して：その他のカスタマイズはお受けいたしません。】※その他の無料カスタマイズはお受けいたしません。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。※12個以上のドリンクのオーダーの場合は一度に短時間でのお届けが難しいため、キャンセルとなる場合がございます。写真はイメージです。※低脂肪タイプはミルクと無脂肪乳をブレンドしています。紙ストローをご使用上の注意：ご使用中にかゆみなどの症状が出た場合はご使用をお控え頂きますようお願い致します。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/002814bf-6c93-4937-9738-573aa415dabe.jpeg",
        "price": 39900,
        "title": "コールドブリュー コーヒー Cold Brew Coffee",
        "uuid": "58dfab4e-c827-5c22-b497-3d6d169596f3",
        "nutritionalInfo": {
          "allergens": [
            ""
          ],
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": true
      },
      "940c36cc-057a-5032-af26-fcf6d70da7fe": {
        "description": "マンゴーの味わいに、氷をブレンドした、フルーティーな味わいのフローズン ビバレッジ。【Uber Eatsでのカスタマイズに関して：その他のカスタマイズはお受けいたしません。】※その他の無料カスタマイズはお受けいたしません。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。※12個以上のドリンクのオーダーの場合は一度に短時間でのお届けが難しいため、キャンセルとなる可能性がございます。写真はイメージです",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/1ff16bd4-34f4-4073-9085-a2f3805a43c9.jpeg",
        "price": 50700,
        "title": "マンゴーパッションティーフラペチーノ®(ティー抜き) Mango Passion Tea Frappuccino ®( Non Tea)",
        "uuid": "940c36cc-057a-5032-af26-fcf6d70da7fe",
        "nutritionalInfo": {
          "allergens": "",
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": true
      },
      "e7b55c36-3990-530d-9ff8-23a83a6b7765": {
        "description": "パイ生地にポテトを敷き、クリームチーズや卵などを混ぜた生地を流し込み、ベーコンとほうれん草をトッピング。仕上げにパルメザンチーズをかけて、こんがりと風味豊かに焼きあげました。生地のクリームチーズの濃厚な味わいとホイップクリームのなめらかな口どけ感、ベーコンやじゃがいもなどの具材感をお楽しみください。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。写真はイメージです。温めてお届けします。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/c63b424f-5cc6-45d3-8237-7235d6b08b9c.jpeg",
        "price": 41000,
        "title": "ベーコンとほうれん草のキッシュ Bacon & Spinach Quiche ",
        "uuid": "e7b55c36-3990-530d-9ff8-23a83a6b7765",
        "nutritionalInfo": {
          "allergens": [
            ""
          ],
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 8640000000,
        "classifications": [],
        "hasCustomizations": false
      },
      "dc67b6e5-35c0-5cdd-a3b0-10412e87dc00": {
        "description": "ローズマリー・バジル・オレガノを練りこんだフォカッチャにミートソースを塗り、あらびきのミートボール5個とゴーダチーズを挟みました。フォカッチャは、外はサクサク、中はふわふわです。ミートボールは牛肉と豚肉のあらびき肉を使用し、食感を出しています。\nしっかりと食べ応えがある、ランチにおすすめのホットサンドイッチです。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。写真はイメージです。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/747b87e4-b20b-4232-9ca2-a4a8aa680f5f.jpeg",
        "price": 58300,
        "title": "あらびきミートボール フォカッチャ\tArabiki Meatball Focaccia",
        "uuid": "dc67b6e5-35c0-5cdd-a3b0-10412e87dc00",
        "nutritionalInfo": {
          "allergens": "",
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": false
      },
      "34d9b15e-bc28-5c8f-806b-ddb94c5862f0": {
        "description": "しっかり熟成させたスモーキーで豊かな肉の旨みを味わえるあらびきポークソーセージを、フライドオニオン・粒マスタードと一緒にパイ生地で包み、香ばしく焼き上げました。パイ生地にトッピングされたパルメザンチーズと中のフライドオニオンで、より香ばしさと味わい深いコクを加え、粒マスタードで全体の味を引き締めています。風味豊かでジューシーなソーセージと香ばしくてサクサクと軽い食感のパイ生地が相性抜群です。\nほどよいボリューム感は、朝食やちょっと小腹が空いた時にちょうどいいサイズです。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。写真はイメージです。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/17352c1d-914b-491f-b8ea-90d6c6f24721.jpeg",
        "price": 34500,
        "title": "あらびきソーセージパイ Arabiki Sausage Pie ",
        "uuid": "34d9b15e-bc28-5c8f-806b-ddb94c5862f0",
        "nutritionalInfo": {
          "allergens": [
            ""
          ],
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": false
      },
      "51f1d10d-319c-552c-a31b-224a26079cf0": {
        "description": "アボカド・サーモン・クリームチーズ・人参・紫キャベツ・雑穀サラダを、クチナシでピンクに色付けしたトルティーヤで包みました。サーモンはディルソース、人参と紫キャベツはフレンチドレッシングで和えて、さっぱりとした味わいに仕上げています。雑穀サラダは、もち麦・アマニ・キヌア・アマランサス・チアシード・ブロッコリー・ポテトをハーブソースで和えています。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。写真はイメージです。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/637f43e7-9ed5-4ef9-8ae7-24e3aa8d2b0d.jpeg",
        "price": 45300,
        "title": "アボカドサーモン サラダラップ Avocado Salmon Salad Wrap ",
        "uuid": "51f1d10d-319c-552c-a31b-224a26079cf0",
        "nutritionalInfo": {
          "allergens": "",
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": false
      },
      "1a57c871-793c-54c7-9de1-c4ab435b211c": {
        "description": "抹茶・ホワイトチョコチャンク・生クリームを練り込んだ生地に、抹茶クランブルとマシュマロをのせ、抹茶パウダーと粉糖で仕上げています。しっとり、ぎゅっと詰まった食感と濃厚な味わいが特長です。ちょうど良いサイズ感で、コーヒーブレイクにおすすめです。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。写真はイメージです。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/324b636a-614c-4370-a5a9-2490e1f6fa68.jpeg",
        "price": 29100,
        "title": "抹茶ホワイトチョコバー Matcha White Chocolate Bar",
        "uuid": "1a57c871-793c-54c7-9de1-c4ab435b211c",
        "nutritionalInfo": {
          "allergens": "",
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": false
      },
      "cd441dd3-8259-5362-bd81-b6720a51da3a": {
        "description": "カリカリとした食感が特長の厚みのあるポテトチップスです。シンプルだからこそ、味のバランスにこだわりました。飽きのこない味わいをお楽しみください。 ※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。写真はイメージです。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/a09d3373-7914-4a23-b597-39e5919a279c.jpeg",
        "price": 20500,
        "title": "ポテトチップスシーソルト Potato Chips Sea Salt",
        "uuid": "cd441dd3-8259-5362-bd81-b6720a51da3a",
        "nutritionalInfo": {
          "allergens": [
            ""
          ],
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": false
      },
      "693cb0d5-a0fc-5142-bed0-7076e3f82f72": {
        "description": "香り豊かなベルガモットエッセンスと柔らかな香りのラベンダーを加えた、ブラックティーのブレンドです。 ※Starbucks Rewards™には対応しておりません。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/8d6fd873-d395-4f9f-9b66-bff36044a4d0.jpeg",
        "price": 113400,
        "title": "スターバックス® ティバーナ™ アール グレイ 12袋入り",
        "uuid": "693cb0d5-a0fc-5142-bed0-7076e3f82f72",
        "nutritionalInfo": {
          "allergens": [
            ""
          ],
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": false
      },
      "375ece17-292d-5e9e-8a7c-5ffbb24e2fa6": {
        "description": "ローズマリー・バジル・オレガノを練りこんだフォカッチャに、海老とブロッコリーのフィリングを塗り広げ、海老のむき身・モッツァレラチーズを挟みました。フォカッチャは、外はサクサク、中はふわふわです。海老のむき身とフィリングにはビスクソースを絡めています。\nしっかり食べ応えがある、ランチにおすすめのホットサンドイッチです。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。写真はイメージです。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/56654518-15b2-4ed2-ba49-19f9046559af.jpeg",
        "price": 58300,
        "title": "海老のビスク フォカッチャ Shrimp Bisque Focaccia",
        "uuid": "375ece17-292d-5e9e-8a7c-5ffbb24e2fa6",
        "nutritionalInfo": {
          "allergens": "",
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": false
      },
      "c55ecc6d-9cfc-56eb-992f-6eb9940be344": {
        "description": "もっちりとしたドーナツ生地の中に、いちご果肉入りの色鮮やかで風味豊かないちごソースが入っています。仕上げに乾燥いちご入りのコーティングをし、その上にいちごパウダーをトッピングしました。甘酸っぱいいちごの風味を存分にお楽しみいただけるドーナツです。\n※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。写真はイメージです。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/59cdd410-f390-4d69-b584-4e3fccee086b.jpeg",
        "price": 27000,
        "title": "いちごソースドーナツ Strawberry Sauce Doughnut ",
        "uuid": "c55ecc6d-9cfc-56eb-992f-6eb9940be344",
        "nutritionalInfo": {
          "allergens": "",
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 8640000000,
        "classifications": [],
        "hasCustomizations": false
      },
      "bfff5744-aadd-5bed-b1af-e41d0f91f809": {
        "description": "ほどよいコクでバランスのとれた、キャラメルやナッツの風味とさわやかなシトラス感が特徴のコーヒー。ラテンアメリカ産コーヒーを選りすぐり、アイスコーヒーとして香り高い風味が引き出せるよう特別にブレンド、ローストしました。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。写真はイメージです。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/6ea20fa2-9fc9-419e-b73e-df79fe8254e6.jpeg",
        "price": 153300,
        "title": "スターバックス® アイスコーヒー ブレンド Starbucks® Iced Coffee Blend",
        "uuid": "bfff5744-aadd-5bed-b1af-e41d0f91f809",
        "nutritionalInfo": {
          "allergens": "",
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": true
      },
      "a6b81233-506e-531f-a45c-9c27cf44ae34": {
        "description": "ナッツを感じさせる風味が特徴の、すっきりとしたバランスのとれたコーヒーです。いつでも、どこでもおいしくお楽しみいただけるスティックタイプのコーヒーです。 ※Starbucks Rewards™には対応しておりません。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/07dfa8a9-5369-4ef9-bf67-3c24ead7ce42.jpeg",
        "price": 102600,
        "title": "スターバックス ヴィア® コーヒーエッセンス コロンビア (2.1g×12本)",
        "uuid": "a6b81233-506e-531f-a45c-9c27cf44ae34",
        "nutritionalInfo": {
          "allergens": [
            ""
          ],
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": false
      },
      "1063c5bd-3845-54ac-b242-970066fbfd2e": {
        "description": "ふんわり軽い食感と程よい甘さが特長のアメリカンマフィン生地に、バナナピューレとチョコチップを混ぜ込み、バナナチップとスターバックスオリジナルのチョコレートチャンクをトッピングして焼き上げました。バナナピューレとヨーグルトソースを生地に混ぜ込むことで、軽いながらもしっとりとした食感を出しています。\nバナナの自然な甘さとチョコチップの風味を活かすため、やさしい甘みが特長の三温糖を少しだけ使用し、あっさりとした生地に仕上げました。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。写真はイメージです。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/d7b9f51f-3b4b-414e-b5ac-6e5591628608.jpeg",
        "price": 25900,
        "title": "おおつぼほまれ×マフィン バナナチョコレート Banana Chocolate Muffin 2005",
        "uuid": "1063c5bd-3845-54ac-b242-970066fbfd2e",
        "nutritionalInfo": {
          "allergens": "",
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": false
      },
      "9a80f1a5-5f18-5087-9543-fdd68b041b97": {
        "description": "\"しっとりと焼き上げたワッフル生地にソフトなキャラメルフィリングをサンドしたキャラメルワッフル。優しく香るシナモンの風味が、シンプルなキャラメルの味わいのアクセントになっています。あたたかいコーヒーを注いだカップの上にのせてしばらく置くと、中のキャラメルがとろけて一層おいしくお楽しみいただけます。\n※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。写真はイメージです。\"",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/9c64eadb-ca49-43cb-9281-9e6449ece655.jpeg",
        "price": 18300,
        "title": "キャラメルワッフル Caramel Waffle ",
        "uuid": "9a80f1a5-5f18-5087-9543-fdd68b041b97",
        "nutritionalInfo": {
          "allergens": [
            ""
          ],
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": false
      },
      "1324b02f-d09e-5d96-8c2e-7ea75cfa1fb6": {
        "description": "紅茶の伝統的な味わいと上品な香りが楽しめるティー【Uber Eatsでのカスタマイズに関して：その他のカスタマイズはお受けいたしません。】※その他の無料カスタマイズはお受けいたしません。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。※12個以上のドリンクのオーダーの場合は一度に短時間でのお届けが難しいため、キャンセルとなる場合がございます。写真はイメージです。紙ストローをご使用上の注意：ご使用中にかゆみなどの症状が出た場合はご使用をお控え頂きますようお願い致します。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/6527bb24-bcdc-4590-8002-02506cdb7fcd.jpeg",
        "price": 36700,
        "title": "アイスティー (ブラック) Iced Black Tea (Iced)",
        "uuid": "1324b02f-d09e-5d96-8c2e-7ea75cfa1fb6",
        "nutritionalInfo": {
          "allergens": [
            ""
          ],
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": true
      },
      "3f2d58d4-188b-557a-a512-67e83f24700c": {
        "description": "ココアや煎ったナッツの風味がほのかに感じられる、バランスのとれたなめらかな口あたりです。いつでも、どこでもおいしくお楽しみいただけるスティックタイプのコーヒーです。 ※Starbucks Rewards™には対応しておりません。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/474f77ca-7721-4291-b17d-4d45f9a07806.jpeg",
        "price": 102600,
        "title": "スターバックス ヴィア® コーヒーエッセンス パイクプレイス® ロースト スティックタイプ (2.1g×12本)",
        "uuid": "3f2d58d4-188b-557a-a512-67e83f24700c",
        "nutritionalInfo": {
          "allergens": [
            ""
          ],
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": false
      },
      "a75118a6-eaee-5e0e-b621-6fc4131c28ce": {
        "description": "アールグレイの茶葉やパウダー入りのマフィン生地に、大きめに切ったピーチダイスとアールグレイクランブルをトッピングして焼き上げました。\nよりピーチの味わいが楽しめるよう、マフィン生地には、ピーチ果汁やピーチソースを混ぜ込んでいます。さらに、豆乳とホイップクリームでしっとりとした食感を出し、やさしい甘みが特徴の三温糖でほんのり甘さをつけています。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。写真はイメージです。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/18bf4097-cc84-4bf7-a258-44814148033c.jpeg",
        "price": 25900,
        "title": "おおつぼほまれ×マフィン アールグレイピーチ Earl Grey Peach Muffin ",
        "uuid": "a75118a6-eaee-5e0e-b621-6fc4131c28ce",
        "nutritionalInfo": {
          "allergens": "",
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 8640000000,
        "classifications": [],
        "hasCustomizations": false
      },
      "9a47eba8-56be-52c1-96a1-4af436d214fa": {
        "description": "ピンクグレープフルーツなどの様々なシトラスに国産のゆず果皮を組み合わせ、酸味を抑えながらも豊かな風味に仕上げたティービバレッジ。ピンクグレープフルーツや桃の果肉感、ゆずの皮の食感が特徴です。【Uber Eatsでのカスタマイズに関して：その他のカスタマイズはお受けいたしません。】※その他の無料カスタマイズはお受けいたしません。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。※12個以上のドリンクのオーダーの場合は一度に短時間でのお届けが難しいため、キャンセルとなる可能性がございます。写真はイメージです。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/b6a6a01f-4c2b-4daf-a06f-667de40d7b7a.jpeg",
        "price": 49600,
        "title": "アイスゆずシトラス＆ティー Iced Yuzu Citrus & Tea",
        "uuid": "9a47eba8-56be-52c1-96a1-4af436d214fa",
        "nutritionalInfo": {
          "allergens": "",
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": true
      },
      "27100970-0479-5bde-b3c3-c4c10a3e267f": {
        "description": "フレンチトースト専用に焼き上げた食パンをカットし、卵・牛乳・砂糖などを混ぜ合わせたフレンチ液に浸して焼き上げました。\n手にもって食べやすいハンディタイプで、小腹がすいた時にぴったりのボリュームです。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。写真はイメージです。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/a9431fb3-6d4a-4c06-b9c8-7be6e533b896.jpeg",
        "price": 25900,
        "title": "フレンチトースト French Toast ",
        "uuid": "27100970-0479-5bde-b3c3-c4c10a3e267f",
        "nutritionalInfo": {
          "allergens": "",
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": false
      },
      "c46fdc5f-e054-503f-866f-ddbd48dfbe95": {
        "description": "エスプレッソに熱いお湯を注いだ、すっきりとしたのどごしのコーヒーです。ドリップコーヒーのお好きな方にもおすすめです。※トールサイズ、エキストラホットでの提供です。【Uber Eatsでのカスタマイズに関して：その他のカスタマイズはお受けいたしません。】※その他の無料カスタマイズはお受けいたしません。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。※12個以上のドリンクのオーダーの場合は一度に短時間でのお届けが難しいため、キャンセルとなる場合がございます。写真はイメージです。※シロップには香料を使用しております。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/ba8702bf-9ff7-4048-a014-f2d81ff8124a.jpeg",
        "price": 37800,
        "title": "カフェ アメリカーノ (ホット) Caffè Americano (Hot)",
        "uuid": "c46fdc5f-e054-503f-866f-ddbd48dfbe95",
        "nutritionalInfo": {
          "allergens": [
            ""
          ],
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": true
      },
      "4bb68d02-97df-5045-867c-2ad5cae6ccee": {
        "description": "ダークココアのような口あたり、ロースト感のある深みや甘みと、しっかりとしたコクの奥行きのある豊かなブレンド。イタリアン ローストによる深みが加わっています。\n特別な器具を使うことなく手軽に味わえるドリップタイプのコーヒーです。ドリップタイプ(9g×6袋) ※Starbucks Rewards™には対応しておりません。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/f1c10e22-0af2-4b88-8c48-2f129cb46903.jpeg",
        "price": 72300,
        "title": "スターバックス オリガミ® パーソナルドリップ® コーヒー カフェ ベロナ®",
        "uuid": "4bb68d02-97df-5045-867c-2ad5cae6ccee",
        "nutritionalInfo": {
          "allergens": [
            ""
          ],
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": false
      },
      "293fa3c4-5755-5abb-9b8c-c666705aafdf": {
        "description": "上部はレタス・アボカド・メキシカンチキンサラダ・レッドチェダーチーズ・赤パプリカを、下部は雑穀メキシカンブロッコリーサラダをトッピングし、クリームチーズフィリングをトッピングして、パプリカで色つけしたトルティーヤで巻いています。\nメキシカンチキンサラダは、蒸し鶏・枝豆・赤インゲン豆・レンズ豆・オイル漬ドライトマト・ポテトをメキシカンチリソースで和えました。\n雑穀メキシカンブロッコリーサラダは、ブロッコリー・もち麦・ローストアマニ・キヌア・アマランサス・チアシード・玉ねぎ・カリフラワーをメキシカンチリソースで和えました。\nソースの辛みと、アボカドのまろやかさの風味のコントラストをお楽しみください。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。写真はイメージです。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/b7093d16-1178-40ab-95d2-f562fbc52f14.jpeg",
        "price": 45300,
        "title": "メキシカンアボカド サラダラップ Mexican Avocado Salad Wrap ",
        "uuid": "293fa3c4-5755-5abb-9b8c-c666705aafdf",
        "nutritionalInfo": {
          "allergens": "",
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": false
      },
      "c1e0886b-1d17-58d9-aa92-500ed371c3a8": {
        "description": "石窯で焼いたパンに、半熟卵・ショルダーハム・トマトクリームソースをサンドしました。トマトクリームソースは、オイル漬のセミドライトマトとトマトペーストに牛乳・パルメザンチーズを加えて煮込み、トマトの酸味が穏やかでコクのある味わいに仕上げました。\nサクッとしたパンの食感ととろりと溶けたチーズ、ジューシーなハムの組み合わせがほどよいボリューム感で、朝食にぴったりなサンドイッチです。。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。写真はイメージです。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/30cb3986-dc45-4d69-a494-4d52631a5006.jpeg",
        "price": 41000,
        "title": "ハムエッグ ホットサンド Ham Egg Hot Sandwich ",
        "uuid": "c1e0886b-1d17-58d9-aa92-500ed371c3a8",
        "nutritionalInfo": {
          "allergens": [
            ""
          ],
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 8640000000,
        "classifications": [],
        "hasCustomizations": false
      },
      "1cc85370-46d2-56a2-b04a-bc5b2e5c6412": {
        "description": "石窯で焼いたパンに、ツナチャンク・ツナフィリング・粒マスタード・チェダーチーズをサンドしました。ツナフィリングは、ツナ・エリンギ・玉ねぎ・黒胡椒をバター・サラダ油・白ワインでソテーし、ベシャメルソースを絡めています。\nサクッとしたパンの食感、ツナととろりと溶けたチェダーチーズの組み合わせがほどよいボリューム感で、朝食にぴったりなサンドイッチです。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。写真はイメージです。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/c88ee2ee-28ae-41d0-8d38-fddee5df15ea.jpeg",
        "price": 41000,
        "title": "ツナチェダーチーズ ホットサンド Tuna Cheddar Cheese Hot Sandwich",
        "uuid": "1cc85370-46d2-56a2-b04a-bc5b2e5c6412",
        "nutritionalInfo": {
          "allergens": "",
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": false
      },
      "107877de-5586-508e-a174-cba77d659ce8": {
        "description": "インド、スリランカ、中国産の茶葉をブレンドしたブラックティーです。そのままでも、ミルクや砂糖を加えてもしっかりとした味わいをお楽しみいただけます。 ※Starbucks Rewards™には対応しておりません。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/78cf08e0-dacd-4e1a-a9ec-2cfa0e9be29a.jpeg",
        "price": 113400,
        "title": "スターバックス® ティバーナ™ イングリッシュ ブレックファスト 12袋入り",
        "uuid": "107877de-5586-508e-a174-cba77d659ce8",
        "nutritionalInfo": {
          "allergens": [
            ""
          ],
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": false
      },
      "aac38f11-c843-5e49-91ca-2506b60355c3": {
        "description": "甘く香ばしいキャラメルの香りがやさしく広がるおいしさ。ミルクを注ぐだけで、いつでも、どこでもスターバックスのキャラメル ラテのような味わいが簡単にお楽しみいただけるスティックタイプです。 ※Starbucks Rewards™には対応しておりません。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/071775cc-0ce9-4b76-ab8f-8202f04807eb.jpeg",
        "price": 61500,
        "title": "スターバックス ヴィア® コーヒーエッセンス キャラメル スティックタイプ (9.7g×5本)",
        "uuid": "aac38f11-c843-5e49-91ca-2506b60355c3",
        "nutritionalInfo": {
          "allergens": [
            ""
          ],
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": false
      },
      "6af12ef6-912e-51b7-bf7c-9ee14bfc7e30": {
        "description": "富士ミネラルウォーターの水源は、40年をかけて富士山の玄武岩層を経て、840mの山麓に湧く富士の伏流水です。バナジウムを多く含み、ミネラルバランスのとれた弱アルカリ性のまろやかな軟水タイプです。※Starbucks Rewards™には対応しておりません。写真はイメージです。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/c716633a-352d-4f23-ba67-e382b03ded25.jpeg",
        "price": 12900,
        "title": "ミネラルウォーター\tBottled Mineral Water",
        "uuid": "6af12ef6-912e-51b7-bf7c-9ee14bfc7e30",
        "nutritionalInfo": {
          "allergens": [
            ""
          ],
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": false
      },
      "bddee2e7-bb4b-5f65-9b55-99ee5d5de71a": {
        "description": "エスプレッソにほろ苦いチョコレートシロップとミルク【Uber Eatsでのカスタマイズに関して：その他のカスタマイズはお受けいたしません。】※その他の無料カスタマイズはお受けいたしません。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。※12個以上のドリンクのオーダーの場合は一度に短時間でのお届けが難しいため、キャンセルとなる可能性がございます。写真はイメージです。※低脂肪タイプはミルクと無脂肪乳をブレンドしています。※ブレべはミルクとホイップ用クリーム(乳脂肪と植物性脂肪を含むクリーム)をブレンドしています。※シロップには香料を使用しております。紙ストローをご使用上の注意：ご使用中にかゆみなどの症状が出た場合はご使用をお控え頂きますようお願い致します。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/421140dd-40ce-4562-856d-e46402f3cfc1.jpeg",
        "price": 47500,
        "title": "カフェ モカ (アイス) Caffè Mocha (Iced)",
        "uuid": "bddee2e7-bb4b-5f65-9b55-99ee5d5de71a",
        "nutritionalInfo": {
          "allergens": [
            ""
          ],
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": true
      },
      "9292e68b-5d13-5695-9a7f-8a3ae6cc93b0": {
        "description": "発酵バターを使った生地に、スターバックスオリジナルのチョコレートを入れ、さらに生地にも混ぜ込み、外はザックリ、中はしっとりと焼き上げました。\nぜひ、コーヒーやラテと一緒に、リラックスしたひと時をお楽しみください。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。写真はイメージです。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/1c4c8851-984f-4549-b205-d741333b3dd3.jpeg",
        "price": 28000,
        "title": "チョコレートチャンクスコーン Chocolate Chunk Scone ",
        "uuid": "9292e68b-5d13-5695-9a7f-8a3ae6cc93b0",
        "nutritionalInfo": {
          "allergens": [
            ""
          ],
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": false
      },
      "4ef16bb4-a877-59ed-b782-082f6482538d": {
        "description": "お好みのフィローネ、スターバックスラテ、ベーカリーのセットです。 ※フィローネは温めてお届けします。  ※Starbucks Rewards™には対応しておりません。　※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。 ※12個以上のドリンクのオーダーの場合は一度に短時間でのお届けが難しいため、キャンセルとなる可能性がございます。写真はイメージです。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/f17d50a3-5cce-4084-a864-5783596213cc.jpeg",
        "price": 111100,
        "title": "スターバックスミールA Starbucks Meal A",
        "uuid": "4ef16bb4-a877-59ed-b782-082f6482538d",
        "nutritionalInfo": {
          "allergens": [
            ""
          ],
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": true
      },
      "62c2eac1-73cc-5ad5-831e-1b4f0eb4f099": {
        "description": "甘さの中にほんのり香るスパイス【Uber Eatsでのカスタマイズに関して：その他のカスタマイズはお受けいたしません。】※その他の無料カスタマイズはお受けいたしません。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。※12個以上のドリンクのオーダーの場合は一度に短時間でのお届けが難しいため、キャンセルとなる場合がございます。写真はイメージです。※低脂肪タイプはミルクと無脂肪乳をブレンドしています。※ブレべはミルクとホイップ用クリーム(乳脂肪と植物性脂肪を含むクリーム)をブレンドしています。※シロップには香料を使用しております。紙ストローをご使用上の注意：ご使用中にかゆみなどの症状が出た場合はご使用をお控え頂きますようお願い致します。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/d85a9de2-eb89-468e-ac92-757b4ba96d1e.jpeg",
        "price": 47500,
        "title": "チャイティーラテ (アイス) Chai Tea Latte (Iced)",
        "uuid": "62c2eac1-73cc-5ad5-831e-1b4f0eb4f099",
        "nutritionalInfo": {
          "allergens": [
            ""
          ],
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": true
      },
      "0fdf522f-641e-5559-b949-05e762c0ffc0": {
        "description": "人気のBLTサンドイッチを2ピースのセットにしました。グレインブレッドにドライトマトソースとマスタード入りマヨネーズを塗り、ベーコン・レタス・スライストマトを挟みました。ベーコンの味わいをしっかり感じていただけるサンドイッチです。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。写真はイメージです。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/f6fc26de-d53a-4464-9e55-183e3f574c6f.jpeg",
        "price": 57200,
        "title": "BLTサンドイッチ BLT Sandwich ",
        "uuid": "0fdf522f-641e-5559-b949-05e762c0ffc0",
        "nutritionalInfo": {
          "allergens": "",
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": false
      },
      "378af569-aa16-5be0-b5df-e46db331ade2": {
        "description": "いれたてのドリップ コーヒーを専用の容器（返却不要）に入れてご用意します。オフィスでのミーティング、イベント会場、ご近所の集まりなどニーズに合わせてスターバックスのコーヒーを楽しんでみませんか？約１２杯分（付属品：ペーパーカップ・ポーションミルク・シュガー・マドラー・紙ナプキン）とスナックがセットとなります。\n※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。写真はイメージです。【Uber Eatsでのご注文に関して】いれたてのコーヒーを準備するため配送までに30～40分程度お時間頂きます。最大注文数は２個までとさせて頂き、コーヒー豆の種類はお選びいただけません。配送の都合上、COFFEE TRAVELER２個と他のドリンクの同時注文はご遠慮ください。※カップに注ぐ際、コーヒーの飛び跳ねにご注意ください。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/bb5bdc2e-e141-4a2d-a02c-8a84448bf9b9.jpeg",
        "price": 291600,
        "title": "STARBUCKS® COFFEE TRAVELER PACK",
        "uuid": "378af569-aa16-5be0-b5df-e46db331ade2",
        "nutritionalInfo": {
          "allergens": "",
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": true
      },
      "4d5a79d8-0da5-5762-89d1-9653b54bf250": {
        "description": "創業当初よりお届けしてきたおもてなしの心あふれるブレンド。ナッツやココアの味わいが特徴で、スターバックス ローストによって引き出された香りやコクなど、すべてのバランスがよいコーヒー。※Starbucks Rewards™には対応しておりません。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/a31a411f-c30a-42c5-b6fd-f25bbf08af9b.jpeg",
        "price": 113400,
        "title": "ハウス ブレンド House_Blend",
        "uuid": "4d5a79d8-0da5-5762-89d1-9653b54bf250",
        "nutritionalInfo": {
          "allergens": [
            ""
          ],
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": true
      },
      "d7220f7d-7ba6-5b3c-9e92-dc1a5c7d2d79": {
        "description": "石窯で香ばしく焼き上げたフィローネに、ダイスカットした豚バラ肉・きのこソテー・デュクセルソースを和えたフィリングをトッピングし、モッツァレラチーズをサンドしました。モッツァレラチーズは2種類使用していて、フレッシュタイプのもっちりとした食感と、シュレッドタイプの温めた時にとろりととろけるなめらかな食感を楽しめます。\nきのこの芳醇な香りと、2種類のモッツァレラチーズの食感やまろやかさが味わい深いサンドイッチです。\n※デュクセルソース：マッシュルームや玉ねぎを使い、旨みを凝縮したソース。。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。写真はイメージです。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/1dec6c18-4080-44c0-a85d-4970440dfb84.jpeg",
        "price": 51800,
        "title": "きのこ＆モッツァレラ 石窯フィローネ Mushroom & Mozzarella Cheese Pork　Filone ",
        "uuid": "d7220f7d-7ba6-5b3c-9e92-dc1a5c7d2d79",
        "nutritionalInfo": {
          "allergens": [
            ""
          ],
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 8640000000,
        "classifications": [],
        "hasCustomizations": false
      },
      "027ecb86-e323-51cc-bb61-2eb0cd2dab5b": {
        "description": "ゴママヨネーズで和えたチキン・ごぼう・レンコンと人参のゴマ和え・レタス・人参・紫キャベツ・キュウリをトルティーヤで包みました。根菜の食感をより感じていただけるように、細切りのごぼうに太めにカットしたごぼうをミックスしています。ザクザクした食感と、風味豊かなゴマの風味をお楽しみください。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。写真はイメージです。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/cb0b8c0f-f0ad-4d5e-b09d-6d0c95f42c7b.jpeg",
        "price": 41000,
        "title": "根菜チキン サラダラップ Root Vegetables Chicken Salad Wrap ",
        "uuid": "027ecb86-e323-51cc-bb61-2eb0cd2dab5b",
        "nutritionalInfo": {
          "allergens": [
            ""
          ],
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": false
      },
      "8bd4c112-2c0e-54d6-aa4f-5bc7ceaeb0e3": {
        "description": "石窯で焼き上げたフィローネに粒からしマヨネーズを塗り、ローストチキンとハニーマスタードソースで和えたオニオンカリフラワーソテー・ブロッコリーをサンドしました。ジューシーなローストチキンの肉の旨みと、ハニーマスタードのほんのり甘いはちみつの風味が相性がぴったりなサンドイッチです。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。写真はイメージです。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/446ac60e-7d55-4fa8-b9cd-b8bf5a1e2dcc.jpeg",
        "price": 49600,
        "title": "ハニーマスタードチキン 石窯フィローネ Honey Mustard Chicken Filone",
        "uuid": "8bd4c112-2c0e-54d6-aa4f-5bc7ceaeb0e3",
        "nutritionalInfo": {
          "allergens": "",
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": false
      },
      "c8c59024-5b6a-551d-a02e-5f951bb2918b": {
        "description": "最も人気のあるエスプレッソビバレッジ【Uber Eatsでのカスタマイズに関して：その他のカスタマイズはお受けいたしません。】※その他の無料カスタマイズはお受けいたしません。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。※12個以上のドリンクのオーダーの場合は一度に短時間でのお届けが難しいため、キャンセルとなる可能性がございます。写真はイメージです。※低脂肪タイプはミルクと無脂肪乳をブレンドしています。※ブレべはミルクとホイップ用クリーム(乳脂肪と植物性脂肪を含むクリーム)をブレンドしています。※シロップには香料を使用しております。紙ストローをご使用上の注意：ご使用中にかゆみなどの症状が出た場合はご使用をお控え頂きますようお願い致します。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/1aba7081-c1e4-44c2-9cff-960a6c9890cc.jpeg",
        "price": 41000,
        "title": "スターバックス ラテ (アイス) Caffè Latte (Iced)",
        "uuid": "c8c59024-5b6a-551d-a02e-5f951bb2918b",
        "nutritionalInfo": {
          "allergens": [
            ""
          ],
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": true
      },
      "789c77a7-e3b1-5779-aed5-dc3a55b30b4b": {
        "description": "厳選された香り高いドリップコーヒー【Uber Eatsでのカスタマイズに関して：その他のカスタマイズはお受けいたしません。】※その他の無料カスタマイズはお受けいたしません。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。※12個以上のドリンクのオーダーの場合は一度に短時間でのお届けが難しいため、キャンセルとなる可能性がございます。写真はイメージです。トールサイズで提供です。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/60389592-e4b4-4acf-9a2b-a52ccb39edc9.jpeg",
        "price": 35600,
        "title": "ドリップ コーヒー (ホット) Drip Coffee (Hot)",
        "uuid": "789c77a7-e3b1-5779-aed5-dc3a55b30b4b",
        "nutritionalInfo": {
          "allergens": [
            ""
          ],
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": false
      },
      "24322de4-8834-5a91-b21a-146453bb3ea8": {
        "description": "パリッとした食感と香ばしさ、噛めば噛むほどコーンの甘みが感じられるトルティーヤチップスに、ブラックペッパーをきかせました。食べ始めたら止められない、後を引く味わいです。\nカップ型の容器に入っているので、机の上やドリンクホルダーに置きやすく、ドライブのお供にもぴったりです。。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。写真はイメージです。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/6c82b9df-9220-41e5-af39-6446c0539a14.jpeg",
        "price": 23700,
        "title": "トルティーヤチップス (ブラックペッパー) Tortilla Chips (Black Pepper)",
        "uuid": "24322de4-8834-5a91-b21a-146453bb3ea8",
        "nutritionalInfo": {
          "allergens": [
            ""
          ],
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": false
      },
      "35e748bb-28b6-55e5-a86a-2893e1ef9173": {
        "description": "エスプレッソにホワイトモカシロップとミルク【Uber Eatsでのカスタマイズに関して：その他のカスタマイズはお受けいたしません。】※その他の無料カスタマイズはお受けいたしません。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。※12個以上のドリンクのオーダーの場合は一度に短時間でのお届けが難しいため、キャンセルとなる場合がございます。写真はイメージです。※低脂肪タイプはミルクと無脂肪乳をブレンドしています。※ブレべはミルクとホイップ用クリーム(乳脂肪と植物性脂肪を含むクリーム)をブレンドしています。※シロップには香料を使用しております。紙ストローをご使用上の注意：ご使用中にかゆみなどの症状が出た場合はご使用をお控え頂きますようお願い致します。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/9e99d76b-a598-42c2-ba92-90763ee3a1f5.jpeg",
        "price": 47500,
        "title": "ホワイト モカ (アイス) White Mocha (Iced)",
        "uuid": "35e748bb-28b6-55e5-a86a-2893e1ef9173",
        "nutritionalInfo": {
          "allergens": [
            ""
          ],
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": true
      },
      "5cf1bea3-0b47-5c5b-b5a6-1749d3aa104f": {
        "description": "キーライムを思わせるさわやかな酸味とはちみつのような甘みが特徴の、なめらかで程よいコクのコーヒー。ルワンダの首都キガリにはスターバックスのファーマーサポートセンターがあり、東アフリカの生産者と一緒にコーヒー豆の品質や栽培技術の向上に取り組んでいます。※Starbucks Rewards™には対応しておりません。 ※アレルゲン情報は スターバックス コーヒー ジャパンの公式ホームページをご覧ください。写真はイメージです。",
        "imageUrl": "https://d1ralsognjng37.cloudfront.net/c6726222-f45d-46b4-a31b-0251998e6e5a.jpeg",
        "price": 174900,
        "title": "スターバックス® ルワンダ Starbucks® Rwanda",
        "uuid": "5cf1bea3-0b47-5c5b-b5a6-1749d3aa104f",
        "nutritionalInfo": {
          "allergens": "",
          "displayString": ""
        },
        "suspendReason": null,
        "suspendUntil": 0,
        "classifications": [],
        "hasCustomizations": true
      }
    }
  },
  "sections": [
    {
      "subsectionUuids": [
        "c19120dc-380b-5ec7-b476-62b3cac223b8",
        "6337765f-aad0-518c-a761-fe87eae950bc",
        "cc26c2fa-daab-5149-a3d5-dd69cf2e61cc",
        "29b25545-eef7-54ab-8add-ff4db159ab20",
        "cc8ca211-fc27-5bf9-a7c8-34a5a5b51422",
        "7135742c-7e90-5387-85a7-fa9f23e6d45d",
        "d47a8493-68e2-5deb-a19e-1627b11caaff",
        "76377690-ca76-57b5-b015-83158ec8e5bc",
        "c5afb49d-d0c9-5f39-bc84-d0b894b7c461",
        "2d2e1ea9-d108-5333-ad0d-32e4554bb190",
        "ef21b810-26bc-5654-a2c6-e0c93e238d4b",
        "b1ebfb4c-9d4b-5348-bf9f-42e70eaae4e3",
        "511f5acf-e98b-5655-937d-bd5f48449aa4",
        "96c2ee66-7d8e-528f-8a33-0bccc118ccab"
      ],
      "title": "メニュー Menu",
      "subtitle": "9:00 AM – 10:00 PM",
      "uuid": "61b993c0-fabb-58de-a91b-7a1888829769",
      "isTop": true,
      "isOnSale": false
    }
  ],
  "subsectionsMap": {
    "ef21b810-26bc-5654-a2c6-e0c93e238d4b": {
      "itemUuids": [
        "d61ebf24-ea49-52f4-aa53-2b160d674e1d",
        "c55ecc6d-9cfc-56eb-992f-6eb9940be344"
      ],
      "subtitle": null,
      "title": "ドーナツ Doughnut",
      "uuid": "ef21b810-26bc-5654-a2c6-e0c93e238d4b",
      "displayType": null
    },
    "7135742c-7e90-5387-85a7-fa9f23e6d45d": {
      "itemUuids": [
        "9ce18ca6-965f-5ba8-a090-65490ca69986",
        "6af12ef6-912e-51b7-bf7c-9ee14bfc7e30"
      ],
      "subtitle": "",
      "title": "コールドドリンク Cold Drink",
      "uuid": "7135742c-7e90-5387-85a7-fa9f23e6d45d",
      "displayType": null
    },
    "29b25545-eef7-54ab-8add-ff4db159ab20": {
      "itemUuids": [
        "c8c59024-5b6a-551d-a02e-5f951bb2918b",
        "bddee2e7-bb4b-5f65-9b55-99ee5d5de71a",
        "35e748bb-28b6-55e5-a86a-2893e1ef9173",
        "82362be6-8715-5a28-b601-e58fc2f698d6",
        "91c66af8-b5db-5f40-a65e-362a6d8dea14",
        "58dfab4e-c827-5c22-b497-3d6d169596f3"
      ],
      "subtitle": "",
      "title": "コールドコーヒー Cold Coffee",
      "uuid": "29b25545-eef7-54ab-8add-ff4db159ab20",
      "displayType": null
    },
    "96c2ee66-7d8e-528f-8a33-0bccc118ccab": {
      "itemUuids": [
        "5ad04c1f-8767-51f1-b8ec-889191087626",
        "369ee1dd-375c-55aa-9f17-4133835a3fd0",
        "4bb68d02-97df-5045-867c-2ad5cae6ccee",
        "3f2d58d4-188b-557a-a512-67e83f24700c",
        "a6b81233-506e-531f-a45c-9c27cf44ae34",
        "16f8ac56-1a73-5d16-84c0-84cb5ef91b0b",
        "326214dc-1e92-58ff-a3b2-febba0f39ac3",
        "aac38f11-c843-5e49-91ca-2506b60355c3",
        "4d5a79d8-0da5-5762-89d1-9653b54bf250",
        "f62bded0-88d3-5cba-8409-93a6a7a7bcac",
        "bfff5744-aadd-5bed-b1af-e41d0f91f809",
        "5cf1bea3-0b47-5c5b-b5a6-1749d3aa104f"
      ],
      "subtitle": "",
      "title": "コーヒー豆 Coffee Beans",
      "uuid": "96c2ee66-7d8e-528f-8a33-0bccc118ccab",
      "displayType": null
    },
    "c19120dc-380b-5ec7-b476-62b3cac223b8": {
      "itemUuids": [
        "4ef16bb4-a877-59ed-b782-082f6482538d",
        "960a77d6-0081-557c-9623-0c1bbc41b9e1",
        "378af569-aa16-5be0-b5df-e46db331ade2"
      ],
      "subtitle": "",
      "title": "スターバックスミール Starbucks Meal",
      "uuid": "c19120dc-380b-5ec7-b476-62b3cac223b8",
      "displayType": null
    },
    "d47a8493-68e2-5deb-a19e-1627b11caaff": {
      "itemUuids": [
        "8bd4c112-2c0e-54d6-aa4f-5bc7ceaeb0e3",
        "03773b9a-d380-5866-85e7-199bf343fe39",
        "d7220f7d-7ba6-5b3c-9e92-dc1a5c7d2d79"
      ],
      "subtitle": "",
      "title": "フィローネ Filone",
      "uuid": "d47a8493-68e2-5deb-a19e-1627b11caaff",
      "displayType": null
    },
    "cc8ca211-fc27-5bf9-a7c8-34a5a5b51422": {
      "itemUuids": [
        "8802b626-0c9f-53fa-b7b7-41e95f4ccb40",
        "1324b02f-d09e-5d96-8c2e-7ea75cfa1fb6",
        "62c2eac1-73cc-5ad5-831e-1b4f0eb4f099",
        "034190c5-3cf2-59d5-a1f3-e5ebc21123d1",
        "925b77bd-dcf4-574a-808e-0d466234cf1f",
        "1bfd5a50-3f1f-5da7-8e80-d620c8d367ff",
        "9a47eba8-56be-52c1-96a1-4af436d214fa"
      ],
      "subtitle": "",
      "title": "ティー Tea",
      "uuid": "cc8ca211-fc27-5bf9-a7c8-34a5a5b51422",
      "displayType": null
    },
    "511f5acf-e98b-5655-937d-bd5f48449aa4": {
      "itemUuids": [
        "693cb0d5-a0fc-5142-bed0-7076e3f82f72",
        "107877de-5586-508e-a174-cba77d659ce8"
      ],
      "subtitle": "",
      "title": "ティバーナ TEAVANA",
      "uuid": "511f5acf-e98b-5655-937d-bd5f48449aa4",
      "displayType": null
    },
    "c5afb49d-d0c9-5f39-bc84-d0b894b7c461": {
      "itemUuids": [
        "27100970-0479-5bde-b3c3-c4c10a3e267f",
        "46da21ca-1a39-5701-b72b-a3d69be7d9f1",
        "0f16642e-b2b6-5adb-8271-912468cc74c3",
        "51cf7bee-64eb-58af-8869-3066d471d17a",
        "34d9b15e-bc28-5c8f-806b-ddb94c5862f0",
        "e7b55c36-3990-530d-9ff8-23a83a6b7765",
        "ff21ae46-0a9a-5b70-ba85-0c2abbf0cb8d",
        "e6fda3cc-6127-5670-ab1e-58ef8d12f890",
        "a75118a6-eaee-5e0e-b621-6fc4131c28ce",
        "1063c5bd-3845-54ac-b242-970066fbfd2e"
      ],
      "subtitle": "",
      "title": "ベーカリー Bakery",
      "uuid": "c5afb49d-d0c9-5f39-bc84-d0b894b7c461",
      "displayType": null
    },
    "76377690-ca76-57b5-b015-83158ec8e5bc": {
      "itemUuids": [
        "c1e0886b-1d17-58d9-aa92-500ed371c3a8",
        "027ecb86-e323-51cc-bb61-2eb0cd2dab5b",
        "51f1d10d-319c-552c-a31b-224a26079cf0",
        "293fa3c4-5755-5abb-9b8c-c666705aafdf",
        "0fdf522f-641e-5559-b949-05e762c0ffc0"
      ],
      "subtitle": "",
      "title": "サンドイッチ Sandwich",
      "uuid": "76377690-ca76-57b5-b015-83158ec8e5bc",
      "displayType": null
    },
    "b1ebfb4c-9d4b-5348-bf9f-42e70eaae4e3": {
      "itemUuids": [
        "3bb39da4-359c-57b2-9c17-fef840687071",
        "cd441dd3-8259-5362-bd81-b6720a51da3a",
        "32f5b689-c9cb-5ceb-8ed5-b1853ddfbd96",
        "9a80f1a5-5f18-5087-9543-fdd68b041b97",
        "14638bec-353d-5cdb-a220-f86d02630d9c",
        "8a3c53bc-a19f-5e02-9ac0-66dc97c27f5c",
        "24322de4-8834-5a91-b21a-146453bb3ea8",
        "edadfd4a-acdd-57d3-a0d5-7af550102cae",
        "a91eb7da-c592-5b3f-a674-4628339cee9d",
        "dbecfe93-36d7-547b-9491-92723323e019"
      ],
      "subtitle": "",
      "title": "スナック Snack",
      "uuid": "b1ebfb4c-9d4b-5348-bf9f-42e70eaae4e3",
      "displayType": null
    },
    "cc26c2fa-daab-5149-a3d5-dd69cf2e61cc": {
      "itemUuids": [
        "b30a00c7-350f-55ad-93ea-6726aa293d5d",
        "c46fdc5f-e054-503f-866f-ddbd48dfbe95",
        "789c77a7-e3b1-5779-aed5-dc3a55b30b4b",
        "c57b215e-2beb-5e26-a527-22d6c9c908a8"
      ],
      "subtitle": "",
      "title": "ホットコーヒー Hot Coffee",
      "uuid": "cc26c2fa-daab-5149-a3d5-dd69cf2e61cc",
      "displayType": null
    },
    "6337765f-aad0-518c-a761-fe87eae950bc": {
      "itemUuids": [
        "940c36cc-057a-5032-af26-fcf6d70da7fe",
        "1a57c871-793c-54c7-9de1-c4ab435b211c",
        "5a131dcb-df22-58d7-b663-cdf25dd3142b",
        "7d92ebab-66a4-59b6-87c5-5e5288ee13db",
        "1cc85370-46d2-56a2-b04a-bc5b2e5c6412",
        "375ece17-292d-5e9e-8a7c-5ffbb24e2fa6",
        "dc67b6e5-35c0-5cdd-a3b0-10412e87dc00"
      ],
      "subtitle": null,
      "title": "期間限定 Limited",
      "uuid": "6337765f-aad0-518c-a761-fe87eae950bc",
      "displayType": null
    },
    "2d2e1ea9-d108-5333-ad0d-32e4554bb190": {
      "itemUuids": [
        "9292e68b-5d13-5695-9a7f-8a3ae6cc93b0",
        "09addb47-e6df-56d3-8589-ec91fb744fac"
      ],
      "subtitle": null,
      "title": "スコーン Scone",
      "uuid": "2d2e1ea9-d108-5333-ad0d-32e4554bb190",
      "displayType": null
    }
  },
  "title": "スターバックス コーヒー 新潟松崎 Starbucks",
  "sanitizedTitle": "スターバックス コーヒー 新潟松崎 Starbucks",
  "uuid": "ed28ecc6-3e4d-456e-a2de-795380d97ec9",
  "cityId": 2148,
  "categories": [
    "$",
    "カフェ Cafe"
  ],
  "cuisineList": [
    "カフェ Cafe"
  ],
  "priceBucket": "$",
  "etaRange": null,
  "disclaimerBadge": null,
  "distanceBadge": null,
  "fareBadge": null,
  "fareInfo": {
    "serviceFeeCents": null
  },
  "promotion": null,
  "shouldIndex": true,
  "heroImageUrls": [
    {
      "url": "https://d1ralsognjng37.cloudfront.net/e47f9271-3b72-47ce-83d9-e528ba7edc63.jpeg",
      "width": 240
    },
    {
      "url": "https://d1ralsognjng37.cloudfront.net/4601ac2e-b51d-414e-bad1-ae43b56f1565.jpeg",
      "width": 550
    },
    {
      "url": "https://d1ralsognjng37.cloudfront.net/79a4ff3c-cb81-4167-96f9-2c489e47d8ae.jpeg",
      "width": 640
    },
    {
      "url": "https://d1ralsognjng37.cloudfront.net/b4c8f7e2-c9a0-4588-9e08-8e3a1ee654d1.jpeg",
      "width": 750
    },
    {
      "url": "https://d1ralsognjng37.cloudfront.net/808d4063-b4c3-4962-a946-1a4b6b954821.jpeg",
      "width": 1080
    },
    {
      "url": "https://d1ralsognjng37.cloudfront.net/c4f61c30-c949-4eb5-836c-1b5bb57336e0.jpeg",
      "width": 2880
    }
  ],
  "isOpen": false,
  "currencyCode": "JPY",
  "closedMessage": "次回のご注文開始は 9:00 AM です",
  "location": {
    "address": "新潟県新潟市東区松崎862, Niigata, 950-0014",
    "streetAddress": "新潟県新潟市東区松崎862",
    "city": "Niigata",
    "country": "JP",
    "postalCode": "950-0014",
    "region": "",
    "latitude": 37.9338117,
    "longitude": 139.1133169
  },
  "isDeliveryBandwagon": false,
  "isDeliveryOverTheTop": false,
  "isDeliveryThirdParty": false,
  "hours": [
    {
      "dayRange": "毎日",
      "sectionHours": [
        {
          "startTime": 540,
          "endTime": 1320,
          "sectionTitle": ""
        }
      ]
    }
  ],
  "disableOrderInstruction": true,
  "disableCheckoutInstruction": true,
  "nuggets": [],
  "isWithinDeliveryRange": true,
  "slug": "スターハックス-コーヒー-新潟松崎-starbucks",
  "citySlug": "niigata",
  "phoneNumber": "+81252579290",
  "metaJson": "{\"@context\":\"http://schema.org\",\"@type\":\"Restaurant\",\"@id\":\"https://www.ubereats.com/jp/niigata/food-delivery/%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%8F%E3%83%83%E3%82%AF%E3%82%B9-%E3%82%B3%E3%83%BC%E3%83%92%E3%83%BC-%E6%96%B0%E6%BD%9F%E6%9D%BE%E5%B4%8E-starbucks/7Sjsxj5NRW6i3nlTgNl-yQ\",\"name\":\"スターバックス コーヒー 新潟松崎 Starbucks\",\"servesCuisine\":[\"カフェ Cafe\"],\"priceRange\":\"$\",\"image\":[\"https://d1ralsognjng37.cloudfront.net/e47f9271-3b72-47ce-83d9-e528ba7edc63.jpeg\",\"https://d1ralsognjng37.cloudfront.net/4601ac2e-b51d-414e-bad1-ae43b56f1565.jpeg\",\"https://d1ralsognjng37.cloudfront.net/79a4ff3c-cb81-4167-96f9-2c489e47d8ae.jpeg\",\"https://d1ralsognjng37.cloudfront.net/b4c8f7e2-c9a0-4588-9e08-8e3a1ee654d1.jpeg\",\"https://d1ralsognjng37.cloudfront.net/808d4063-b4c3-4962-a946-1a4b6b954821.jpeg\",\"https://d1ralsognjng37.cloudfront.net/c4f61c30-c949-4eb5-836c-1b5bb57336e0.jpeg\"],\"potentialAction\":{\"@type\":\"OrderAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https://www.ubereats.com/jp/niigata/food-delivery/%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%8F%E3%83%83%E3%82%AF%E3%82%B9-%E3%82%B3%E3%83%BC%E3%83%92%E3%83%BC-%E6%96%B0%E6%BD%9F%E6%9D%BE%E5%B4%8E-starbucks/7Sjsxj5NRW6i3nlTgNl-yQ?utm_campaign=order-action&amp;utm_medium=organic\",\"inLanguage\":\"日本語\",\"actionPlatform\":[\"http://schema.org/DesktopWebPlatform\",\"http://schema.org/MobileWebPlatform\"]},\"deliveryMethod\":[\"http://purl.org/goodrelations/v1#DeliveryModeOwnFleet\"]},\"address\":{\"@type\":\"PostalAddress\",\"addressLocality\":\"Niigata\",\"addressRegion\":\"\",\"postalCode\":\"950-0014\",\"addressCountry\":\"JP\",\"streetAddress\":\"新潟県新潟市東区松崎862\"},\"geo\":{\"@type\":\"GeoCoordinates\",\"latitude\":37.9338117,\"longitude\":139.1133169},\"telephone\":\"+81252579290\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":4.8,\"reviewCount\":\"12\"},\"openingHoursSpecification\":[{\"@type\":\"OpeningHoursSpecification\",\"dayOfWeek\":[\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\",\"Sunday\"],\"opens\":\"9:0\",\"closes\":\"22:0\"}]}",
  "promoTrackings": [],
  "suggestedPromotion": {
    "text": "",
    "promotionUuid": ""
  },
  "supportedDiningModes": [
    {
      "mode": "DELIVERY",
      "title": "配達",
      "isSelected": true,
      "isAvailable": true
    }
  ],
  "isPreview": false,
  "pinnedInfo": null,
  "rating": {
    "ratingValue": 4.8,
    "reviewCount": "12"
  },
  "menuUUID": "ed28ecc6-3e4d-456e-a2de-795380d97ec9",
  "hasMultipleMenus": false,
  "seoMeta": {
    "title": "スターバックス コーヒー 新潟松崎 Starbucksの配達 | 新形 | Uber Eats",
    "description": "Uber アカウントで、新形 の スターバックス コーヒー 新潟松崎 Starbucks に料理の配達を注文できます。メニューや人気商品の閲覧、注文状況の確認ができます。"
  }
}
