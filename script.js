$(document).ready(function () {
  $(".lr").click(function () {
    $(".dog-name").text("Labrador Retriever");

    $(".breed-dog-img img").attr("src", "./images/lr.avif");

    $(".info-about-dog").html(`
            <li>Origin: Canada</li>
            <li>Size: Medium to large (22.5-24.5 inches in height, 55-80 pounds)</li>
            <li>Coat: Short, dense, water-resistant, comes in black, yellow, or chocolate
            </li>
            <li>Temperament: Friendly, outgoing, and eager to please</li>
            <li>Exercise Needs: High; needs daily walks and playtime</li>
            <li>Common Health Issues: Hip dysplasia, elbow dysplasia, obesity</li>
            <li>Ideal For: Families, active individuals, and as service dogs</li>
         `);
  });

  $(".gs").click(function () {
    $(".dog-name").text("German Shepherd");

    $(".breed-dog-img img").attr("src", "./images/gs.avif");

    $(".info-about-dog").html(`
            <li>Origin: Germany</li>
            <li>Size: Large (22-26 inches in height, 50-90 pounds)</li>
            <li>Coat: Medium-length, dense, can be black, sable, or a variety of other colors
            </li>
            <li>Temperament: Intelligent, confident, and loyal</li>
            <li>Exercise Needs: High; requires regular physical and mental stimulation
            </li>
            <li>Common Health Issues: Hip and elbow dysplasia, digestive issues</li>
            <li>Ideal For: Families, working roles (police, military), and active individuals</li>
         `);
  });

  $(".gr").click(function () {
    $(".dog-name").text("Golden Retriever");

    $(".breed-dog-img img").attr("src", "./images/gr.avif");

    $(".info-about-dog").html(`
               <li>Origin: Scotland</li>
               <li>Size: Medium to large (21.5-24 inches in height, 55-75 pounds)</li>
               <li>Coat: Long, dense, water-repellent, golden color

               </li>
               <li>Temperament: Friendly, tolerant, and intelligent
                </li>
               <li>Exercise Needs: Moderate to high; enjoys daily walks and playtime
               </li>
               <li>Common Health Issues: Hip dysplasia, elbow dysplasia, certain cancers</li>
               <li>Ideal For: Families, therapy dogs, and active individuals</li>
            `);
  });

  $(".bulldog").click(function () {
    $(".dog-name").text("Bulldog");

    $(".breed-dog-img img").attr("src", "./images/bulldog.jpg");

    $(".info-about-dog").html(`
               <li>Origin: England</li>
               <li>Size: Medium (14-15 inches in height, 40-50 pounds)</li>
               <li>Coat: Short, smooth, comes in various colors including brindle, white, and fawn
               </li>
               <li>Temperament: Gentle, courageous, and affectionate
                </li>
               <li>Exercise Needs: Low; prefers short walks and moderate activity
               </li>
               <li>Common Health Issues: Respiratory issues, hip dysplasia, skin infections</li>
               <li>Ideal For: Families, apartment living, and those seeking a calm companion</li>
            `);
  });

  $(".poodle").click(function () {
    $(".dog-name").text("Poodle");

    $(".breed-dog-img img").attr("src", "./images/Poodle.jpg");

    $(".info-about-dog").html(`
               <li>Origin: Germany (Standard Poodle), France (Miniature and Toy Poodles)</li>
               <li>Size: Varies by type (Standard: 15+ inches, Miniature: 10-15 inches, Toy: up to 10 inches)
                </li>
               <li>Coat: Curly, hypoallergenic, comes in many colors
               </li>
               <li>Temperament: Intelligent, alert, and active
                </li>
               <li>Exercise Needs: Moderate to high; enjoys daily exercise and mental challenges
               </li>
               <li>Common Health Issues: Hip dysplasia, eye issues, thyroid problems
                </li>
               <li>Ideal For: Families, individuals with allergies, and those seeking an intelligent companion</li>
            `);
  });

  $(".beagle").click(function () {
    $(".dog-name").text("Beagle");

    $(".breed-dog-img img").attr("src", "./images/Beagle.avif");

    $(".info-about-dog").html(`
               <li>Origin: England</li>
               <li>Size: Medium (13-15 inches in height, 20-30 pounds)
                </li>
               <li>Coat: Short, dense, comes in various colors including tri-color and bi-color
               </li>
               <li>Temperament: Curious, friendly, and energetic
                </li>
               <li>Exercise Needs: Moderate; enjoys regular walks and playtime
               </li>
               <li>Common Health Issues: Hip dysplasia, epilepsy, hypothyroidism
                </li>
               <li>Ideal For: Families, active individuals, and those who enjoy a playful dog</li>
            `);
  });

  $(".sh").click(function () {
    $(".dog-name").text("Siberian Husky");
    $(".breed-dog-img img").attr("src", "./images/Siberian Husky.jpg");
    $(".info-about-dog").html(`
               <li>Origin: Siberia (Russia)</li>
               <li>Size: Medium (20-24 inches in height, 35-60 pounds)
                </li>
               <li>Coat: Thick double coat, comes in various colors including black, gray, and red
               </li>
               <li>Temperament: Energetic, friendly, and independent
                </li>
               <li>Exercise Needs: High; needs plenty of exercise and mental stimulation
               </li>
               <li>Common Health Issues: Hip dysplasia, eye problems (cataracts, progressive retinal atrophy)
                </li>
               <li>Ideal For: Active families, those in cold climates, and experienced dog owners</li>
            `);
  });

  $(".dachshund").click(function () {
    $(".dog-name").text("Dachshund");
    $(".breed-dog-img img").attr("src", "./images/Dachshund.jpg");
    $(".info-about-dog").html(`
               <li>Origin: Germany</li>
               <li>Size: Small (5-9 inches in height, 16-32 pounds depending on variety)
                </li>
               <li>Coat: Can be smooth, long, or wiry; comes in various colors
               </li>
               <li>Temperament: Playful, brave, and affectionate
                </li>
               <li>Exercise Needs: Moderate; enjoys regular walks and playtime
               </li>
               <li>Common Health Issues: Intervertebral disc disease, obesity
                </li>
               <li>Ideal For: Families, apartment living, and those who enjoy a lively small dog</li>
            `);
  });

  $(".boxer").click(function () {
    $(".dog-name").text("Boxer");
    $(".breed-dog-img img").attr("src", "./images/Boxer.jpg");
    $(".info-about-dog").html(`
               <li>Origin: Germany</li>
               <li>Size: Medium to large (21-25 inches in height, 50-80 pounds)
                </li>
               <li>Coat: Short, smooth, comes in brindle, fawn, and white
               </li>
               <li>Temperament: Energetic, playful, and affectionate
                </li>
               <li>Exercise Needs: High; needs regular exercise and mental stimulation
               </li>
               <li>Common Health Issues: Hip dysplasia, certain cancers, heart issues
                </li>
               <li>Ideal For: Families, active individuals, and those who enjoy a playful, high-energy dog</li>
            `);
  });

  $(".st").click(function () {
    $(".dog-name").text("Shih Tzu");
    $(".breed-dog-img img").attr("src", "./images/Shih Tzu.jpg");
    $(".info-about-dog").html(`
               <li>Origin: Tibet</li>
               <li>Size: Small (9-10.5 inches in height, 9-16 pounds)
                </li>
               <li>Coat: Long, flowing, needs regular grooming, comes in many colors
               </li>
               <li>Temperament: Affectionate, friendly, and outgoing
                </li>
               <li>Exercise Needs: Low to moderate; enjoys short walks and indoor play
               </li>
               <li>Common Health Issues: Eye problems, dental issues, breathing problems
                </li>
               <li>Ideal For: Families, apartment living, and those seeking a loving lap dog</li>
            `);
  });

  //   cat breeds
  $(".Siamese").click(function () {
    $(".cat-name").text("Siamese");
    $(".breed-cat-img img").attr("src", "./images/Siamese.avif");
    $(".info-about-cat").html(`
            <li>Appearance: Sleek, slender body with almond-shaped blue eyes and short coat with color   points on ears, face, paws, and tail.</li>
            <li>Personality: Highly vocal, affectionate, social, and intelligent.</li>
            <li>Care: Low grooming needs; regular brushing for coat maintenance.</li>
            <li>Fun Fact: Siamese cats are known to form strong bonds with their owners and often follow them around like dogs.</li>
            `);
  });

  $(".Persian").click(function () {
    $(".cat-name").text("Persian");
    $(".breed-cat-img img").attr("src", "./images/Persian.avif");
    $(".info-about-cat").html(`
            <li>Appearance: Long, thick fur, round face, and flat nose (brachycephalic); available in various colors.</li>
            <li>Personality: Calm, gentle, and laid-back; enjoys lounging in a quiet environment.</li>
            <li>Care: Requires daily brushing to avoid matting and regular eye cleaning.</li>
            <li>Fun Fact: Persians are one of the oldest cat breeds, dating back to 1600 B.C.</li>
            `);
  });

  $(".Maine-Coon").click(function () {
    $(".cat-name").text("Maine-Coon");
    $(".breed-cat-img img").attr("src", "./images/Maine Coon.avif");
    $(".info-about-cat").html(`
            <li>Appearance: Large, muscular build with tufted ears, bushy tail, and long, water-resistant coat.</li>
            <li>Personality: Friendly, playful, and sociable; often referred to as “gentle giants.”</li>
            <li>Care: Regular brushing to prevent tangles; low-maintenance despite long fur.
            </li>
            <li>Fun Fact: Maine Coons are excellent climbers and have a strong hunting instinct.</li>
            `);
  });


  $(".Ragdoll").click(function () {
    $(".cat-name").text("Ragdoll");
    $(".breed-cat-img img").attr("src", "./images/Ragdoll.jpg");
    $(".info-about-cat").html(`
            <li>Appearance: Large, blue-eyed cats with semi-long fur and color-point markings.</li>
            <li>Personality: Calm, docile, and affectionate; known for their tendency to go limp when picked up.</li>
            <li>
            Care: Regular grooming needed; gentle brushing helps keep their coat smooth.
            </li>
            <li>Fun Fact: Ragdolls are often described as “puppy-like” because they enjoy following their owners around and being carried.</li>
            `);
  });

  $(".Bengal").click(function () {
    $(".cat-name").text("Bengal");
    $(".breed-cat-img img").attr("src", "./images/Bengal.avif");
    $(".info-about-cat").html(`
            <li>Appearance: Athletic build with a short, sleek coat that resembles wild cats, typically spotted or marbled like a leopard.</li>
            <li>Personality: Energetic, curious, and playful; loves interactive play and mental stimulation.</li>
            <li>
           Care: Minimal grooming; occasional brushing keeps their coat shiny.
            </li>
            <li>Fun Fact: Bengals are known for their love of water and may even jump into the shower with their owners!</li>
            `);
  });

  $(".Sphynx").click(function () {
    $(".cat-name").text("Sphynx");
    $(".breed-cat-img img").attr("src", "./images/Sphynx.jpg");
    $(".info-about-cat").html(`
            <li>Appearance: Hairless with wrinkled skin, large ears, and expressive eyes; available in various skin tones.</li>
            <li>Personality: Affectionate, friendly, and loves human interaction; often described as dog-like.</li>
            <li>
           Care: Regular skin care (wiping down and occasional bathing) is necessary to remove oil buildup.
            </li>
            <li>Fun Fact: Despite their lack of fur, Sphynx cats are known to be warm due to their high metabolism and often seek out heat sources.</li>
            `);
  });

  $(".Russian-Blue").click(function () {
    $(".cat-name").text("Russian Blue");
    $(".breed-cat-img img").attr("src", "./images/Russian Blue.avif");
    $(".info-about-cat").html(`
            <li>Appearance: Slender, graceful cat with a short, dense silvery-blue coat and striking green eyes.</li>
            <li>Personality: Intelligent, reserved, and calm; tends to form strong bonds with their family but can be shy around strangers.
</li>
            <li>
           Care: Minimal grooming; brushing occasionally to maintain their plush coat.</li>
            <li>Fun Fact: Russian Blues are known for being hypoallergenic due to producing lower levels of the allergen Fel d 1.</li>
            `);
  });
});


