$(function () {
  //header bar scrolldown
  $(window).scroll(function () {
    var pos = $(window).scrollTop();
    // console.log(pos);

    if (pos > 80) {
      $("header").css("margin-top", "0");
      //$("#main_nav>ul li").css("display","list-item").css("opacity","1");
    } else {
      $("header").css("margin-top", "");
      //$("#main_nav>ul li").css("display","").css("opacity","");
    }

    //london_info
    if (pos > 200 && pos < 1220) {
      $(".info_map").css("padding-right", "0");
      $(".basic_info_wrapper").css("opacity", "1");
    } else {
      $(".info_map").css("padding-right", "");
      $(".basic_info_wrapper").css("opacity", "0");
    }

    //weather_info
    if (pos > 1450) {
      $(".today_weather").css("opacity", "1");
    } else {
      $(".today_weather").css("opacity", "0");
    }
    if (pos > 1450) {
      $(".weekly_weather_wrapper").css("margin-top", "2rem");
    } else {
      $(".weekly_weather_wrapper").css("margin-top", "0");
    }

    //place
    if (pos > 2300) {
      $("#grid_place").css("opacity", "1");
      $(".place_wrapper>.grid_title").css("opacity", "1");
    } else {
      $("#grid_place").css("opacity", "");
      $(".place_wrapper>.grid_title").css("opacity", "");
    }

    //food
    if (pos > 3300) {
      $("#grid_food").css("opacity", "1");
      $(".food_wrapper>.grid_title").css("opacity", "1");
    } else {
      $("#grid_food").css("opacity", "");
      $(".food_wrapper>.grid_title").css("opacity", "");
    }

    //gallery
    if (pos > 4300) {
      $(".gallery").css("opacity", "1");
    } else {
      $(".gallery").css("opacity", "");
    }
  });
  //scroll_top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $("#MOVE_TOP_BTN").fadeIn();
      $(".scrollBtn").fadeIn();
    } else {
      $("#MOVE_TOP_BTN").fadeOut();
      $(".scrollBtn").fadeOut();
    }
  });
  $("#MOVE_TOP_BTN").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });
  var $mnu = $("#main_nav>ul>li.scrollBtn"); //메뉴
  var nowIdx = 0;
  var arrTopVal = []; //아티클의 top

  //광고 배너의 top값을 배열에 저장

  $("section").each(function () {
    arrTopVal.push($(this).offset().top);
  });

  //navigation_active

  $("#main_nav>ul>li:nth-child(1)").click(function () {
    $("html, body").animate(
      {
        scrollTop: arrTopVal[1],
      },
      400
    );
    return false;
  });
  $("#main_nav>ul>li:nth-child(2)").click(function () {
    $("html, body").animate(
      {
        scrollTop: arrTopVal[2] - 100,
      },
      400
    );
    return false;
  });
  $("#main_nav>ul>li:nth-child(3)").click(function () {
    $("html, body").animate(
      {
        scrollTop: arrTopVal[3],
      },
      400
    );
    return false;
  });
  $("#main_nav>ul>li:nth-child(4)").click(function () {
    $("html, body").animate(
      {
        scrollTop: arrTopVal[4] + 850,
      },
      400
    );
    return false;
  });
  $("#main_nav>ul>li:nth-child(5)").click(function () {
    $("html, body").animate(
      {
        scrollTop: arrTopVal[5] + 1450,
      },
      400
    );
    return false;
  });
  //place_content
  $("#grid_place").elastic_grid({
    showAllText: "All",
    items: [
      {
        title: "Gangnam style",
        description:
          "전세계를 말춤열풍으로 달군 가수 싸이의 ‘강남스타일’을 스토리텔링으로 담은 랜드마크로,무대 위에 올라가면 ‘강남스타일’ 후렴구가 흘러나옵니다",
        thumbnail: [
          "images/place_01_01.jpg",
          "images/place_01_02.jpg",
          "images/place_01_03.jpg",
          "images/place_01_04.jpg",
        ],
        large: [
          "images/place_01_01.jpg",
          "images/place_01_02.jpg",
          "images/place_01_03.jpg",
          "images/place_01_04.jpg",
        ],
        button_list: [
          {
            title: "Site Link",
            url: "https://www.gangnam.go.kr/board/B_000733/1061731/view.do?mid=FM010407/",
            new_window: true,
          },
        ],
        tags: ["SIGHTS"],
      },

      {
        title: "COEX",
        description:
          "교통과 통신, 첨단 비즈니스 인프라를 두루 갖춘 글로벌 비즈니스의 메카이자 아시아 최고의 전시·문화·관광의 명소로서, 국제 무역과 문화 교류의 장을 마련할 목적으로 1979년 3월 개관한 한국 최대의 종합전시관이다.",
        thumbnail: [
          "images/coex.jpg",
          "images/place_02_01.jpg",
          "images/place_02_02.jpg",
          "images/place_02_03.jpg",
          "images/place_02_04.jpg",
        ],
        large: [
          "images/coex.jpg",
          "images/place_02_01.jpg",
          "images/place_02_02.jpg",
          "images/place_02_03.jpg",
          "images/place_02_04.jpg",
        ],
        button_list: [
          {
            title: "Site Link",
            url: "http://www.coex.co.kr/",
            new_window: true,
          },
        ],
        tags: ["Shopping Center"],
      },
      {
        title: "Street on Apgujeong",
        description:
          "서울 강남에도 로데오 거리가 있다! 1990년대 말부터 고급 의류·잡화 매장이 들어서면서 패션의 중심가로 자리매김했습니다..",
        thumbnail: [
          "images/place_03_01.jpg",
          "images/place_03_02.jpg",
          "images/place_03_03.jpg",
          "images/place_03_04.jpg",
        ],
        large: [
          "images/place_03_01.jpg",
          "images/place_03_02.jpg",
          "images/place_03_03.jpg",
          "images/place_03_04.jpg",
        ],
        button_list: [
          {
            title: "Site Link",
            url: "http://www.tate.org.uk/visit/tate-modern?gclid=EAIaIQobChMIg4TAsp7Z2AIVVR0rCh3sZA0oEAAYASAAEgJ95fD_BwE",
            new_window: true,
          },
        ],
        tags: ["Shopping Center"],
      },
      {
        title: "K STAR ROAD",
        description:
          "한류 스토리가 있는 장소를 걸어 찾아가서 직접 체험할 수 있는‘도심판 올레길’로, 최신 한류 트렌드를 반영해 핫(hot)한 스타들의 추억이 있는 명소, 자주 가는 맛집 등의 스토리를 확인해볼 수 있습니다.",
        thumbnail: [
          "images/place_04_01.jpg",
          "images/place_04_02.jpg",
          "images/place_04_03.jpg",
          "images/place_04_04.jpg",
          "images/place_04_05.jpg",
        ],
        large: [
          "images/place_04_01.jpg",
          "images/place_04_02.jpg",
          "images/place_04_03.jpg",
          "images/place_04_04.jpg",
          "images/place_04_05.jpg",
        ],
        button_list: [
          {
            title: "Site Link",
            url: "http://kstar.eventme.co.kr/",
            new_window: true,
          },
        ],
        tags: ["SIGHTS"],
      },
      {
        title: "Gangnam Station",
        description:
          "강남역지하쇼핑센터는 편리한 교통권 및 다양하고 복합적 사무, 상업, 문화 시설이 한데 어우러져있는 하루 유동인구 60만명의 매혹적인 최적의 쇼핑공간입니다.",
        thumbnail: [
          "images/place_05_01.jpg",
          "images/place_05_02.jpg",
          "images/place_05_03.jpg",
          "images/place_05_04.jpg",
          "images/place_05_05.jpg",
        ],
        large: [
          "images/place_05_01.jpg",
          "images/place_05_02.jpg",
          "images/place_05_03.jpg",
          "images/place_05_04.jpg",
          "images/place_05_05.jpg",
        ],
        button_list: [
          {
            title: "Site Link",
            url: "http://www.hellogangnam.com/index/index_body.php",
            new_window: true,
          },
        ],
        tags: ["Shopping Center"],
      },
      {
        title: "Youngdong Market",
        description:
          "첨단 패션과 비즈니스가 공존하는 강남에 사람 사는 냄새가 물씬 묻어나는 곳이 있습니다.영동전통시장입니다.1975년부터 자그마치 35년 이상 지역주민의 생필품 구매 공간 역할을 하고 있습니다.",
        thumbnail: [
          "images/place_06_01.jpg",
          "images/place_06_02.jpg",
          "images/place_06_03.jpg",
          "images/place_06_04.jpg",
          "images/place_06_05.jpg",
        ],
        large: [
          "images/place_06_01.jpg",
          "images/place_06_02.jpg",
          "images/place_06_03.jpg",
          "images/place_06_04.jpg",
          "images/place_06_05.jpg",
        ],
        button_list: [
          {
            title: "Site Link",
            url: "https://ko.foursquare.com/v/%EC%98%81%EB%8F%99-%EC%A0%84%ED%86%B5%EC%8B%9C%EC%9E%A5/4bed55a83372c92836721114",
            new_window: true,
          },
        ],
        tags: ["Shopping Center"],
      },
      {
        title: "Trick Art Street",
        description:
          "기업, 관공서 등의 이벤트 및 행사에서 활용될 수 있는 트릭아트 포토존입니다. 트릭아트에 회사로고, 캐릭터 등을 노출시켜 간접적인 광고를 할 수 있음과 동시에 고객들이 자연스럽게 브랜드, 제품 ppl 하게 만들었습니다.",
        thumbnail: [
          "images/place_07_01.jpg",
          "images/place_07_02.jpg",
          "images/place_07_03.jpg",
          "images/place_07_04.jpg",
        ],
        large: [
          "images/place_07_01.jpg",
          "images/place_07_02.jpg",
          "images/place_07_03.jpg",
          "images/place_07_04.jpg",
        ],
        button_list: [
          {
            title: "Site Link",
            url: "http://www.roro-art.com/bbs/board.php?bo_table=trick&wr_id=15",
            new_window: true,
          },
        ],
        tags: ["SIGHTS"],
      },
      {
        title: "Bongeunsa",
        description:
          "봉은사의 역사는 신라 시대까지 거슬러 올라갑니다. 794년 당시 고승이었던 연회국사가 견성사란 이름으로 창건,이후 조선시대에 와서 봉은사는 한양에서 가장 큰 규모로 전국에서 손꼽히는 사찰입니다.",
        thumbnail: [
          "images/place_08_01.jpg",
          "images/place_08_02.jpg",
          "images/place_08_03.jpg",
          "images/place_08_04.jpg",
          "images/place_08_05.jpg",
        ],
        large: [
          "images/place_08_01.jpg",
          "images/place_08_02.jpg",
          "images/place_08_03.jpg",
          "images/place_08_04.jpg",
          "images/place_08_05.jpg",
        ],
        button_list: [
          {
            title: "Site Link",
            url: "http://www.bongeunsa.org",
            new_window: true,
          },
        ],
        tags: ["SIGHTS"],
      },
      {
        title: "Museum of Embroidery",
        description:
          "정성스런 바느질에 실린 섬세한 예술적 감각. 우리 조상들의 복장을 보면, 관복의 가슴과 등에 부착했던 흉배, 신부의 예복인 활옷, 자수와 금박으로 장식된 각종 주머니들을 비롯해 화조도, 십장생, 수복 문자가 새겨진 병풍 자수 등 하나같이 화려함과 정성의 극치를 보여주고 있습니다.",
        thumbnail: [
          "images/place_09_01.jpg",
          "images/place_09_02.jpg",
          "images/place_09_03.jpg",
          "images/place_09_04.jpg",
          "images/place_09_05.jpg",
        ],
        large: [
          "images/place_09_01.jpg",
          "images/place_09_02.jpg",
          "images/place_09_03.jpg",
          "images/place_09_04.jpg",
          "images/place_09_05.jpg",
        ],
        button_list: [
          {
            title: "Site Link",
            url: "http://www.bojagii.com",
            new_window: true,
          },
        ],
        tags: ["SIGHTS"],
      },
    ],
  });
  //food_content
  $("#grid_food").elastic_grid({
    showAllText: "All",
    items: [
      {
        title: "Cold noodles",
        description: "해산물 육수로 담백하고 시원한 진주식 냉면",
        thumbnail: [
          "images/food_cold_noodles1.jpg",
          "images/food_cold_noodles2.jpg",
          "images/food_cold_noodles3.jpg",
          "images/food_cold_noodles4.jpg",
          "images/food_cold_noodles5.jpg",
          "images/food_cold_noodles6.jpg",
        ],
        large: [
          "images/food_cold_noodles1.jpg",
          "images/food_cold_noodles2.jpg",
          "images/food_cold_noodles3.jpg",
          "images/food_cold_noodles4.jpg",
          "images/food_cold_noodles5.jpg",
          "images/food_cold_noodles6.jpg",
        ],
        button_list: [
          {
            title: "Site Link",
            url: "http://www.hankb.co.kr",
            new_window: true,
          },
        ],
        tags: ["MEAL"],
      },

      {
        title: "Gangnam Gyoja",
        description:
          "강남에 있는 38년 된 칼국수집 맛이 삼삼하여 남녀노소 즐겨찾는 맛이다",
        thumbnail: [
          "images/food_gangnam_gyoja1.jpg",
          "images/food_gangnam_gyoja2.jpg",
          "images/food_gangnam_gyoja3.jpg",
          "images/food_gangnam_gyoja4.jpg",
          "images/food_gangnam_gyoja5.jpg",
          "images/food_gangnam_gyoja6.jpg",
          "images/food_gangnam_gyoja7.jpg",
        ],
        large: [
          "images/food_gangnam_gyoja1.jpg",
          "images/food_gangnam_gyoja2.jpg",
          "images/food_gangnam_gyoja3.jpg",
          "images/food_gangnam_gyoja4.jpg",
          "images/food_gangnam_gyoja5.jpg",
          "images/food_gangnam_gyoja6.jpg",
          "images/food_gangnam_gyoja7.jpg",
        ],
        button_list: [
          {
            title: "Site Link",
            url: "http://gangnamgyoja.com/",
            new_window: true,
          },
        ],
        tags: ["MEAL"],
      },
      {
        title: "Isaac's toast",
        description:
          "16년차 대한민국 토종 브랜드 800여개 매장을 가진 토스트 브랜드이다",
        thumbnail: [
          "images/food_isaac1.jpg",
          "images/food_isaac2.jpg",
          "images/food_isaac3.jpg",
          "images/food_isaac4.jpg",
          "images/food_isaac5.jpg",
          "images/food_isaac6.jpg",
        ],
        large: [
          "images/food_isaac1.jpg",
          "images/food_isaac2.jpg",
          "images/food_isaac3.jpg",
          "images/food_isaac4.jpg",
          "images/food_isaac5.jpg",
          "images/food_isaac6.jpg",
        ],
        button_list: [
          {
            title: "Site Link",
            url: "http://www.isaac-toast.co.kr/",
            new_window: true,
          },
        ],
        tags: ["SNACK"],
      },
      {
        title: "Hot bar",
        description:
          "전통시장에서나 흔히 볼 만한 핫바를 강남 한가운데에서 볼수있다. 다양한 재료로 만든 핫바를 남녀노소 즐겨먹는 음식이다.",
        thumbnail: [
          "images/food_hotbar.jpg",
          "images/food_hotbar_01.jpg",
          "images/food_hotbar_02.jpg",
          "images/food_hotbar_03.jpg",
          "images/food_hotbar_04.jpg",
        ],
        large: [
          "images/food_hotbar.jpg",
          "images/food_hotbar_01.jpg",
          "images/food_hotbar_02.jpg",
          "images/food_hotbar_03.jpg",
          "images/food_hotbar_04.jpg",
        ],
        button_list: [
          {
            title: "Site Link",
            url: "https://blog.naver.com/goseonghae/221126968242",
            new_window: true,
          },
        ],
        tags: ["SNACK"],
      },
      {
        title: "Masizzim",
        description:
          "아이부터 어른까지 누구나 좋아하는 갈비찜, 근사하고 푸짐한 상차림 한국의 맛을 알려주는 곳이다.",
        thumbnail: [
          "images/food_masizzim1.jpg",
          "images/food_masizzim2.jpg",
          "images/food_masizzim3.jpg",
          "images/food_masizzim4.jpg",
          "images/food_masizzim5.jpg",
        ],
        large: [
          "images/food_masizzim1.jpg",
          "images/food_masizzim2.jpg",
          "images/food_masizzim3.jpg",
          "images/food_masizzim4.jpg",
          "images/food_masizzim5.jpg",
        ],
        button_list: [
          {
            title: "Site Link",
            url: "http://www.masizzim.co.kr",
            new_window: true,
          },
        ],
        tags: ["MEAL"],
      },
      {
        title: "Ironer",
        description:
          "구이 혁명가 철든놈 혁명적인 구이기를 개발하기 위한 25,920시간 한국식 바베큐 문화를 창조하기 위한 노력 충분히 찾아가서 먹을 한 가치가 있다.",
        thumbnail: [
          "images/food_Ironer1.jpg",
          "images/food_Ironer2.jpg",
          "images/food_Ironer3.jpg",
          "images/food_Ironer4.jpg",
          "images/food_Ironer5.jpg",
        ],
        large: [
          "images/food_Ironer1.jpg",
          "images/food_Ironer2.jpg",
          "images/food_Ironer3.jpg",
          "images/food_Ironer4.jpg",
          "images/food_Ironer5.jpg",
        ],
        button_list: [
          {
            title: "Site Link",
            url: "https://www.ironguyskorea.com/projects",
            new_window: true,
          },
        ],
        tags: ["MEAL"],
      },
      {
        title: "Witch kitchen",
        description:
          "마녀주방의 음식은 마치 마녀가 차려준 듯 한 고퀄리티 비주얼의 요리들과 색다른 맛으로 20대들의 이목을 집중시켰다 ",
        thumbnail: [
          "images/food_witch_kitchen.jpg",
          "images/food_witch_kitchen_01.jpg",
          "images/food_witch_kitchen_02.jpg",
          "images/food_witch_kitchen_03.jpg",
          "images/food_witch_kitchen_04.jpg",
        ],
        large: [
          "images/food_witch_kitchen.jpg",
          "images/food_witch_kitchen_01.jpg",
          "images/food_witch_kitchen_02.jpg",
          "images/food_witch_kitchen_03.jpg",
          "images/food_witch_kitchen_04.jpg",
        ],
        button_list: [
          {
            title: "Site Link",
            url: "http://witchskitchen.co.kr/default/",
            new_window: true,
          },
        ],
        tags: ["MEAL"],
      },
      {
        title: "Seasonal Table",
        description:
          "제철음식의 소중함을 전하는 계절 밥상은 한식 뷔페로서 각 계절에 맞는 음식들을 진열해 놓는게 큰 특징이다 ",
        thumbnail: [
          "images/food_seasonal_table1.jpg",
          "images/food_seasonal_table2.jpg",
          "images/food_seasonal_table3.jpg",
          "images/food_seasonal_table4.jpg",
          "images/food_seasonal_table5.jpg",
        ],
        large: [
          "images/food_seasonal_table1.jpg",
          "images/food_seasonal_table2.jpg",
          "images/food_seasonal_table3.jpg",
          "images/food_seasonal_table4.jpg",
          "images/food_seasonal_table5.jpg",
        ],
        button_list: [
          {
            title: "Site Link",
            url: "http://www.seasonstable.co.kr",
            new_window: true,
          },
        ],
        tags: ["MEAL"],
      },
      {
        title: "Food truck",
        description:
          "백종원의 푸드트럭이라는 TV프로그램에서 가장 먼저 다루었던 강남역 푸드트럭 존 이미 자리 잡아 많은 사람들이 오가는 하나의 문화가 되었습니다.",
        thumbnail: [
          "images/food_truck.jpg",
          "images/food_truck_01.jpg",
          "images/food_truck_02.jpg",
          "images/food_truck_03.jpg",
          "images/food_truck_04.jpg",
          "images/food_truck_05.jpg",
        ],
        large: [
          "images/food_truck.jpg",
          "images/food_truck_01.jpg",
          "images/food_truck_02.jpg",
          "images/food_truck_03.jpg",
          "images/food_truck_04.jpg",
          "images/food_truck_05.jpg",
        ],
        button_list: [
          {
            title: "Site Link",
            url: "http://www.foodtruckhankki.com/",
            new_window: true,
          },
        ],
        tags: ["SNACK"],
      },
    ],
  });
  //gallery
  var pos = 0;
  $(".gallery_thumb>img").click(function () {
    pos = $(this).index();

    $(".lightbox_area")
      .css("width", "900px")
      .css("height", "600px")
      .css("padding", "50px");
    var imgsrc = $(this).attr("src");
    $("#rawimage").attr("src", imgsrc).css("width", "100%");

    $(".gallery_thumb>img").css("border", "");
    $(this).css("border", "3px solid red");
  });
  //next_button
  $("#right_btn").click(function () {
    pos = pos + 1;
    if (pos > 7) pos = 0;
    var imgsrc = $(".gallery_thumb>img").eq(pos).attr("src");
    $("#rawimage").attr("src", imgsrc);

    $(".gallery_thumb>img").css("border", "");
    $(".gallery_thumb>img").eq(pos).css("border", "3px solid red");
  });
  //prev_button
  $("#left_btn").click(function () {
    pos = pos - 1;
    if (pos < 0) pos = 7;

    var imgsrc = $(".gallery_thumb>img").eq(pos).attr("src");
    $("#rawimage").attr("src", imgsrc);

    $(".gallery_thumb>img").css("border", "");
    $(".gallery_thumb>img").eq(pos).css("border", "3px solid red");
  });
});
