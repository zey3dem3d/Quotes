var quotes = [
  {
    text: `„من أعظم ما يعين النفس على تحمل التعب الذي تتطلبه معالي الأمور، هو أن يستحضر الثمرة، وأن يستدعي في ذهنه حسن العاقبة.“`,
    author: `إبراهيم السكران --`,
  },
  {
    text: `„من أعظم أسباب البلاء التَوسُّع في معاداة عباد الله المؤمنين، بالحال أو المقال، بالإقدام أو الإحجام؛ إذ لا يبعد أن يكون فيهم لله أولياء، وقد قال سبحانه: "من عادى لي وليًا فقد آذنتُه بالحرب"، وحَرْبُ الله على عبيده صنوف وألوان!“`,
    author: `الشيخ كريم حلمي --`,
  },
  {
    text: `„صحيح أن القرآن بعامة يحمل طاقة تأثيرية تخلب لُب المستمع.. ولكن هناك أمرٌ إضافي صرت ألمسه أخيراً.. وهو أن القرآن إذا خيم سكون الليل يكون عالماً آخر.. ثمة قدر إضافي في جلال القرآن لحظة سكون الليل.“`,
    author: `إبراهيم السكران --`,
  },
  {
    text: `„أنت لا يمكن أن تُكمل السير هكذا، لا بدّ أن تُسافر لمكان لتستريح.. يأتي قيام الليل ليأخذك لهذا العالم، ليُبين لك الحقائق، ليرتفع بك فوق حاجز الزمان والمكان! فترجع إلى الدُّنيا مرة أُخرى وكأنك خُلِقت خَلقًا آخر.. أتيت بقلب غير الذي ذهبت به، بل أتيت بعقل وجسد غير الذي ذهبت بهم؛ إذا ذهب القلب لقيام الليل ذهابًا حقيقيًّا!“`,
    author: `د. أحمد عبد المنعم --`,
  },
  {
    text: `„ليسأل كل منا قلبه في ساعة خلوة وسوف يدله على كل شيء فقد أودع الله فيه تلك البوصلة التي لا تخطئ.“`,
    author: `مصطفى محمود --`,
  },
  {
    text: `„ما دنيانا إلا عطش بلا ارتواء، وجوع بلا شبع، وتعب بلا راحة، وحطب يأكل نفسه. وهي بدون إيمان خواء وخراب وظلمة وتيه وسعي في لا شيء.“`,
    author: `مصطفى محمود --`,
  },
  {
    text: `„وإذا كانت هناك معجزة في الموضوع.. فإنها لم تكن شق بحر أو إحياء ميت أو شفاء أبرص أو إحياء حية من عصا، وإنما كانت المعجزة هي ذات محمد نفسه التي جمعت الكمالات وبلغت في كل كمال ذروته.“`,
    author: `مصطفى محمود --`,
  },
  {
    text: `„شرُّ أنواع الفقر أربعة: الفقر في الدين، والفقر في العقل، والفقر في الصبر، والفقر في المروءة.“`,
    author: `مصطفى السباعي --`,
  },
  {
    text: `„في اختلاف الأصدقاء شماتة الأعداء، وفي اختلاف الإخوة فرصة المتربصين، وفي اختلاف أصحاب الحق فرصة للمبطلين.“`,
    author: `مصطفى السباعي --`,
  },
  {
    text: `„عنوان المحبة ترك التكلف!“`,
    author: `أ. وجدان العلي --`,
  },
  {
    text: `„من أكبر المحن التي تصيب القلب: فقده القدرة على الدهشة! الدهشة هي مرآة الطفولة التي نطالع فيها الجمال، الذي يصر هذا العصر وما فيه ومن فيه على كسرها فينا!“`,
    author: `أ. وجدان العلي --`,
  },
  {
    text: `„وإذا كان صاحب النفس الشريفة المعصومة والقلب الزكي الأطهر صلى الله عليه وسلم لا يغضب لنفسه=فكيف يغضب الواحد منا لنفسٍ مثقلةٍ بالعيوب والآثام؟!“`,
    author: `أ. وجدان العلي --`,
  },
  {
    text: `„اقرأ لكي تتعلم؛ لا لكي تكون بين الناس شيئًا.“`,
    author: `أ. وجدان العلي --`,
  },
  {
    text: `„مشهد الإنسان وهو ينازع ويجاهد نفسه لطاعة الله والقيام له هو مشهد يُحبه الله عز وجلّ.“`,
    author: `د. أحمد عبد المنعم --`,
  },
  {
    text: `„المؤمن لا يخاف. المؤمن يرفع يدهُ في قيام الليل يجد مشكلته قد حُلت.“`,
    author: `د. أحمد عبد المنعم --`,
  },
];

function randomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);

  const randomQoute = quotes[randomIndex];

  document.getElementById(
    "quote-container"
  ).innerHTML = `<p>${randomQoute.text}</p><p>${randomQoute.author}</p>`;
}
