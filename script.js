const popup = document.getElementById("popupGallery");
const mainImage = document.getElementById("mainImage");
const thumbContainer = document.getElementById("thumbnailContainer");

// open popup when clicking "see more"
document.querySelectorAll('.see_more').forEach(button => {
    button.addEventListener('click', () => {
        // get images from data-images attribute
        const images = button.getAttribute('data-images').split(',');

        // set first image as main
        mainImage.src = images[0];

        // clear old thumbnails
        thumbContainer.innerHTML = "";

        // create thumbnails dynamically
        images.forEach(img => {
            const thumb = document.createElement('img');
            thumb.src = img;
            thumb.classList.add('thumb');
            thumb.addEventListener('click', () => {
                mainImage.src = img;
            });
            thumbContainer.appendChild(thumb);
        });

        popup.style.display = "flex";
    });
});

// close popup
document.querySelector(".popup_gallery .close").addEventListener("click", () => {
    popup.style.display = "none";
});

// close on background click
popup.addEventListener("click", e => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});


 // Content for each card
const cardData = [
    {
      title: "プランナー相談会",
      text: "初めての式場見学でも安心。経験豊富な専属プランナーが、おふたりの希望やこだわりを丁寧にヒアリング。予算やスケジュールの相談はもちろん、東郷神社ならではの挙式スタイルもわかりやすくご提案します。",
      img: "main_folder/22.jpg"
    },
    {
      title: "模擬挙式",
      text: "実際の神殿を使った参進の雰囲気を体感。雅楽の音色や本殿の厳かな空気感など、当日の流れをリアルに感じていただけます。ゲストの目線でも確認できるので、イメージがぐっと湧きます。",
      img: "main_folder/23.jpg"
    },
    {
      title: "模擬披露宴",
      text: "披露宴会場の雰囲気や演出をゲスト目線で体験。映像演出やテーブルレイアウト、入場シーンなど、当日のイメージが具体的に描ける充実の内容です。",
      img: "main_folder/24.jpg"
    },
    {
      title: "豪華コース試食",
      text: "和の食材とフレンチの技を融合した料理を、豪華3万円相当コース試食で試食。季節の旬を活かしたメニューや、ゲストに喜ばれる盛り付けの美しさもぜひチェックしてみてください。",
      img: "main_folder/25.jpg"
    },
    {
      title: "衣装展示",
      text: "京都から買い付けた伝統的な生地から現代風のデザインまで細部にこだわった和装を種類豊富にご用意。洋装もアントニオリーヴァなどトレンドドレスや王道ドレスまで。運命の1着に出会えます。",
      img: "main_folder/26.jpg"
    },
    {
      title: "会場コーディネート",
      text: "本番さながらのテーブルコーディネートを見学可能。和の上質感を活かした装花やクロスの色合わせ、照明演出など、写真だけでは伝わらない臨場感をご体感ください。",
      img: "main_folder/27.jpg"
    }
  ];

  const modal = document.getElementById("popupModal");
  const popupImg = document.getElementById("popupImg");
  const popupTitle = document.getElementById("popupTitle");
  const popupText = document.getElementById("popupText");
  const closeBtn = document.querySelector(".close_btn");

  //  Event listeners to all buttons
  document.querySelectorAll(".read_des").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const data = cardData[index];
    popupImg.src = data.img;
    popupTitle.textContent = data.title;
    popupText.textContent = data.text;

    // Show modal smoothly
    modal.style.display = "flex";
    setTimeout(() => {
      modal.classList.add("show");
    }, 10); 
  });
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
  setTimeout(() => {
    modal.style.display = "none";
  }, 300); 
});

// Close when clicking outside content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
    setTimeout(() => {
      modal.style.display = "none";
    }, 300);
  }
});
