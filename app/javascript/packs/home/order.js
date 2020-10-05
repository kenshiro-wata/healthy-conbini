$(function(){

  $('#order_onigiri_id').change(function() {
          var val = $(this).val();
           price = $(this).next('div').children('#'+ val).children('p.price').text();
          $('#pre-onigiri').text(price);

          kcal = $(this).next('div').children('#'+ val).children('p.kcal').text();
         $('#kcal-onigiri').text(kcal);

         vitamin = $(this).next('div').children('#'+ val).children('p.vitamin').text();
         $('#vitamin-onigiri').text(vitamin);

         carbohydrate = $(this).next('div').children('#'+ val).children('p.carbohydrate').text();
         $('#carbohydrate-onigiri').text(carbohydrate);

         protein = $(this).next('div').children('#'+ val).children('p.protein').text();
         $('#protein-onigiri').text(protein);

         lipid = $(this).next('div').children('#'+ val).children('p.lipid').text();
          $('#lipid-onigiri').text(lipid);
  });

  $('#order_bento_id').change(function() {
          var val = $(this).val();
          price = $(this).next('div').children('#'+ val).children('p.price').text();
          $('#pre-bento').text(price);   

          kcal = $(this).next('div').children('#'+ val).children('p.kcal').text();
          $('#kcal-bento').text(kcal);

          vitamin = $(this).next('div').children('#'+ val).children('p.vitamin').text();
          $('#vitamin-bento').text(vitamin);

          carbohydrate = $(this).next('div').children('#'+ val).children('p.carbohydrate').text();
          $('#carbohydrate-bento').text(carbohydrate);

          protein = $(this).next('div').children('#'+ val).children('p.protein').text();
          $('#protein-bento').text(protein);

          lipid = $(this).next('div').children('#'+ val).children('p.lipid').text();
          $('#lipid-bento').text(lipid);
  });

  $('#order_bread_id').change(function() {
          var val = $(this).val();
          price = $(this).next('div').children('#'+ val).children('p.price').text();
          $('#pre-bread').text(price);   

          kcal = $(this).next('div').children('#'+ val).children('p.kcal').text();
          $('#kcal-bread').text(kcal);

          vitamin = $(this).next('div').children('#'+ val).children('p.vitamin').text();
          $('#vitamin-bread').text(vitamin);

          carbohydrate = $(this).next('div').children('#'+ val).children('p.carbohydrate').text();
          $('#carbohydrate-bread').text(carbohydrate);

          protein = $(this).next('div').children('#'+ val).children('p.protein').text();
          $('#protein-bread').text(protein);

          lipid = $(this).next('div').children('#'+ val).children('p.lipid').text();
          $('#lipid-bread').text(lipid);
  });

  $('#order_sweet_bread_id').change(function() {
          var val = $(this).val();
          price = $(this).next('div').children('#'+ val).children('p.price').text();
          $('#pre-sweet_bread').text(price);   

          kcal = $(this).next('div').children('#'+ val).children('p.kcal').text();
          $('#kcal-sweet_bread').text(kcal);

          vitamin = $(this).next('div').children('#'+ val).children('p.vitamin').text();
          $('#vitamin-sweet_bread').text(vitamin);

          carbohydrate = $(this).next('div').children('#'+ val).children('p.carbohydrate').text();
          $('#carbohydrate-sweet_bread').text(carbohydrate);

          protein = $(this).next('div').children('#'+ val).children('p.protein').text();
          $('#protein-sweet_bread').text(protein);

          lipid = $(this).next('div').children('#'+ val).children('p.lipid').text();
          $('#lipid-sweet_bread').text(lipid);
  });

  $('#order_sandwich_id').change(function() {
          var val = $(this).val();
          price = $(this).next('div').children('#'+ val).children('p.price').text();
          $('#pre-sandwich').text(price);   

          kcal = $(this).next('div').children('#'+ val).children('p.kcal').text();
          $('#kcal-sandwich').text(kcal);

          vitamin = $(this).next('div').children('#'+ val).children('p.vitamin').text();
          $('#vitamin-sandwich').text(vitamin);

          carbohydrate = $(this).next('div').children('#'+ val).children('p.carbohydrate').text();
          $('#carbohydrate-sandwich').text(carbohydrate);

          protein = $(this).next('div').children('#'+ val).children('p.protein').text();
          $('#protein-sandwich').text(protein);

          lipid = $(this).next('div').children('#'+ val).children('p.lipid').text();
          $('#lipid-sandwich').text(lipid);
  });

  $('#order_salad_soup_id').change(function() {
          var val = $(this).val();
          price = $(this).next('div').children('#'+ val).children('p.price').text();
          $('#pre-salad_soup').text(price);   

          kcal = $(this).next('div').children('#'+ val).children('p.kcal').text();
          $('#kcal-salad_soup').text(kcal);

          vitamin = $(this).next('div').children('#'+ val).children('p.vitamin').text();
          $('#vitamin-salad_soup').text(vitamin);

          carbohydrate = $(this).next('div').children('#'+ val).children('p.carbohydrate').text();
          $('#carbohydrate-salad_soup').text(carbohydrate);

          protein = $(this).next('div').children('#'+ val).children('p.protein').text();
          $('#protein-salad_soup').text(protein);

          lipid = $(this).next('div').children('#'+ val).children('p.lipid').text();
          $('#lipid-salad_soup').text(lipid);
  });

  $('#order_fry_id').change(function() {
          var val = $(this).val();
          price = $(this).next('div').children('#'+ val).children('p.price').text();
          $('#pre-fry').text(price);   

          kcal = $(this).next('div').children('#'+ val).children('p.kcal').text();
          $('#kcal-fry').text(kcal);

          vitamin = $(this).next('div').children('#'+ val).children('p.vitamin').text();
          $('#vitamin-fry').text(vitamin);

          carbohydrate = $(this).next('div').children('#'+ val).children('p.carbohydrate').text();
          $('#carbohydrate-fry').text(carbohydrate);

          protein = $(this).next('div').children('#'+ val).children('p.protein').text();
          $('#protein-fry').text(protein);

          lipid = $(this).next('div').children('#'+ val).children('p.lipid').text();
          $('#lipid-fry').text(lipid);
  });

  $('#order_dessert_id').change(function() {
          var val = $(this).val();
          price = $(this).next('div').children('#'+ val).children('p.price').text();
          $('#pre-dessert').text(price);   

          kcal = $(this).next('div').children('#'+ val).children('p.kcal').text();
          $('#kcal-dessert').text(kcal);

          vitamin = $(this).next('div').children('#'+ val).children('p.vitamin').text();
          $('#vitamin-dessert').text(vitamin);

          carbohydrate = $(this).next('div').children('#'+ val).children('p.carbohydrate').text();
          $('#carbohydrate-dessert').text(carbohydrate);

          protein = $(this).next('div').children('#'+ val).children('p.protein').text();
          $('#protein-dessert').text(protein);

          lipid = $(this).next('div').children('#'+ val).children('p.lipid').text();
          $('#lipid-dessert').text(lipid);
  });

  $('select').change(function() {
  ////price用
  onigiri_price =  $('#pre-onigiri').text();
  bento_price =  $('#pre-bento').text();
  bread_price = $('#pre-bread').text();
  sweet_bread_price = $('#pre-sweet_bread').text();
  sandwich_price = $('#pre-sandwich').text();
  salad_soup_price = $('#pre-salad_soup').text();
  fry_price = $('#pre-fry').text();
  dessert_price = $('#pre-dessert').text();

  total_price = Number(onigiri_price)+Number(bento_price)+Number(bread_price)+Number(sweet_bread_price)+Number(sandwich_price)+Number(salad_soup_price)+Number(fry_price)+Number(dessert_price);
  $('#item-price').val(total_price);
  $('#item-price1').text(total_price);
  ////kcal用

  onigiri_kcal =  $('#kcal-onigiri').text();
  bento_kcal =  $('#kcal-bento').text();
  bread_kcal = $('#kcal-bread').text();
  sweet_bread_kcal = $('#kcal-sweet_bread').text();
  sandwich_kcal = $('#kcal-sandwich').text();
  salad_soup_kcal = $('#kcal-salad_soup').text();
  fry_kcal = $('#kcal-fry').text();
  dessert_kcal = $('#kcal-dessert').text();

  total_kcal = Number(onigiri_kcal)+Number(bento_kcal)+Number(bread_kcal)+Number(sweet_bread_kcal)+Number(sandwich_kcal)+Number(salad_soup_kcal)+Number(fry_kcal)+Number(dessert_kcal);
  $('#sum-kcal').val(total_kcal);
  $('#sum-kcal1').text(total_kcal);

  ////protain用

  onigiri_protein =  $('#protein-onigiri').text();
  bento_protein =  $('#protein-bento').text();
  bread_protein = $('#protein-bread').text();
  sweet_bread_protein = $('#protein-sweet_bread').text();
  sandwich_protein = $('#protein-sandwich').text();
  salad_soup_protein = $('#protein-salad_soup').text();
  fry_protein = $('#protein-fry').text();
  dessert_protein = $('#protein-dessert').text();

  total_protein = Number(onigiri_protein)+Number(bento_protein)+Number(bread_protein)+Number(sweet_bread_protein)+Number(sandwich_protein)+Number(salad_soup_protein)+Number(fry_protein)+Number(dessert_protein);
  $('#sum-protein').val(total_kcal);
  $('#sum-protein1').text(total_kcal);

  ////carbon用

  onigiri_carbohydrate =  $('#carbohydrate-onigiri').text();
  bento_carbohydrate =  $('#carbohydrate-bento').text();
  bread_carbohydrate = $('#carbohydrate-bread').text();
  sweet_bread_carbohydrate = $('#carbohydrate-sweet_bread').text();
  sandwich_carbohydrate = $('#carbohydrate-sandwich').text();
  salad_soup_carbohydrate = $('#carbohydrate-salad_soup').text();
  fry_carbohydrate = $('#carbohydrate-fry').text();
  dessert_carbohydrate = $('#carbohydrate-dessert').text();

  total_carbohydrate = Number(onigiri_carbohydrate)+Number(bento_carbohydrate)+Number(bread_carbohydrate)+Number(sweet_bread_carbohydrate)+Number(sandwich_carbohydrate)+Number(salad_soup_carbohydrate)+Number(fry_carbohydrate)+Number(dessert_carbohydrate);
  $('#sum-carbohydrate').val(total_carbohydrate);
  $('#sum-carbohydrate1').text(total_carbohydrate);

  ////vitamin用

  onigiri_vitamin =  $('#vitamin-onigiri').text();
  bento_vitamin =  $('#vitamin-bento').text();
  bread_vitamin = $('#vitamin-bread').text();
  sweet_bread_vitamin = $('#vitamin-sweet_bread').text();
  sandwich_vitamin = $('#vitamin-sandwich').text();
  salad_soup_vitamin = $('#vitamin-salad_soup').text();
  fry_vitamin = $('#vitamin-fry').text();
  dessert_vitamin = $('#vitamin-dessert').text();

  total_vitamin = Number(onigiri_vitamin)+Number(bento_vitamin)+Number(bread_vitamin)+Number(sweet_bread_vitamin)+Number(sandwich_vitamin)+Number(salad_soup_vitamin)+Number(fry_vitamin)+Number(dessert_vitamin);
  $('#sum-vitamin').val(total_vitamin);
  $('#sum-vitamin1').text(total_vitamin);

   ////lipid用

     onigiri_lipid =  $('#lipid-onigiri').text();
     bento_lipid =  $('#lipid-bento').text();
     bread_lipid = $('#lipid-bread').text();
     sweet_bread_lipid = $('#lipid-sweet_bread').text();
     sandwich_lipid = $('#lipid-sandwich').text();
     salad_soup_lipid = $('#lipid-salad_soup').text();
     fry_lipid = $('#lipid-fry').text();
     dessert_lipid = $('#lipid-dessert').text();

     total_lipid = Number(onigiri_lipid)+Number(bento_lipid)+Number(bread_lipid)+Number(sweet_bread_lipid)+Number(sandwich_lipid)+Number(salad_soup_lipid)+Number(fry_lipid)+Number(dessert_lipid);
     $('#sum-lipid').val(total_lipid);
     $('#sum-lipid1').text(total_lipid);
  });

  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ["糖質", "タンパク質", "脂質", "ビタミン"],
      datasets: [{
        label: '選択した商品',
        backgroundColor: "rgba(255, 0, 0, 0.2)",
        borderColor: "rgba(255, 0, 0, 0.2)",
        pointBorderWidth: 1,
        pointHitRadius:5,
        data: [20, 20, 20, 20]
      }]
    }
  });

//セレクトボックス変更時ーーーーーーーーーーーーーーーーーーーーーーーA
document.getElementById("order_onigiri_id").onchange = redraw;
document.getElementById("order_bento_id").onchange = redraw;
document.getElementById("order_bread_id").onchange = redraw;
document.getElementById("order_sweet_bread_id").onchange = redraw;
document.getElementById("order_sandwich_id").onchange = redraw;
document.getElementById("order_salad_soup_id").onchange = redraw;
document.getElementById("order_fry_id").onchange = redraw;
document.getElementById("order_dessert_id").onchange = redraw;

function redraw() {
    myChart.destroy();
    getData(); // グラフデータにランダムな値を格納
    drawChart(); // グラフを再描画
  }
//セレクトボックス変更時ーーーーーーーーーーーーーーーーーーーーーーーZ


  // グラフデータをランダムに生成
  function getData() {
    chartVal = []; // 配列を初期化
    ////ここに４つのデータをとってくる処理をかく
    chartVal.push(total_carbohydrate);
    chartVal.push(total_protein);
    chartVal.push(total_lipid);
    chartVal.push(total_vitamin);
  }
  // // グラフ描画処理
  function drawChart() {
    var ctx = document.getElementById("myChart");
    window.myChart = new Chart(ctx, { // インスタンスをグローバル変数で生成
      type: 'radar',
      data: { // ラベルとデータセット
         labels: ["糖質", "タンパク質", "脂質", "ビタミン"],
        datasets: [{
              data: chartVal, // グラフデータ
              label: '選択した商品',
              backgroundColor: "rgba(255, 0, 0, 0.2)",
              borderColor: "rgba(255, 0, 0, 0.2)",
              pointBorderWidth: 1,
              pointHitRadius:5,
              borderWidth: 1, // 枠線の太さ
        }],
      },
    });
  };


// });
// window.addEventListener("load", function (){

  const pullDownButton = document.getElementById("order_onigiri_id")
  pullDownButton.addEventListener("change", function order(){
    const selected = $("#order_onigiri_id").children("option:selected");
    let selectedMenu = selected.text();
    
    console.log(selectedMenu)
    
    const table = document.getElementById("table-body");
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(-1);
    let cell2 = row.insertCell(-1); 
    let cell3 = row.insertCell(-1); 
    let cell4 = row.insertCell(-1);
    let cell5 = row.insertCell(-1); //追加
    let cell6 = row.insertCell(-1); //追加

    let newText  = document.createTextNode(selectedMenu);
    cell1.appendChild(newText);

    let kcal_data  = document.createTextNode(kcal);  //追加
    cell2.appendChild(kcal_data);
    console.log(kcal_data);

    let kcal_text  = document.createTextNode("kcal");
    cell3.appendChild(kcal_text);

    let money_data  = document.createTextNode(price);  //追加
    cell4.appendChild(money_data);

    let money_text  = document.createTextNode("円（税込み）");
    cell5.appendChild(money_text);

    cell6.innerHTML = '<input type="button" value=削除 id="coladd" class="deleteBtn">';

    $(".deleteBtn").on("click", function(){
      $(this).closest('tr').remove();
    });
  })

  const pullDownButton2 = document.getElementById("order_bento_id")
  pullDownButton2.addEventListener("change", function order(){
    const selected2 = $("#order_bento_id").children("option:selected");
    let selectedMenu = selected2.text();
    
    console.log(selectedMenu)
    
    const table = document.getElementById("table-body");
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(-1);
    let cell2 = row.insertCell(-1); 
    let cell3 = row.insertCell(-1); 
    let cell4 = row.insertCell(-1);

    let newText  = document.createTextNode(selectedMenu);
    cell1.appendChild(newText);

    let kcal  = document.createTextNode("kcal");
    cell2.appendChild(kcal);

    let money  = document.createTextNode("円（税込み）");
    cell3.appendChild(money);

    cell4.innerHTML = '<input type="button" value=削除 id="coladd" class="deleteBtn">';

    $(".deleteBtn").on("click", function(){
      $(this).closest('tr').remove();
    });
  })

  const pullDownButton3 = document.getElementById("order_bread_id")
  pullDownButton3.addEventListener("change", function order(){
    const selected3 = $("#order_bread_id").children("option:selected");
    let selectedMenu = selected3.text();
    
    console.log(selectedMenu)
    
    const table = document.getElementById("table-body");
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(-1);
    let cell2 = row.insertCell(-1); 
    let cell3 = row.insertCell(-1); 
    let cell4 = row.insertCell(-1);

    let newText  = document.createTextNode(selectedMenu);
    cell1.appendChild(newText);

    let kcal  = document.createTextNode("kcal");
    cell2.appendChild(kcal);

    let money  = document.createTextNode("円（税込み）");
    cell3.appendChild(money);

    cell4.innerHTML = '<input type="button" value=削除 id="coladd" class="deleteBtn">';

    $(".deleteBtn").on("click", function(){
      $(this).closest('tr').remove();
    });
  })

  const pullDownButton4 = document.getElementById("order_sweet_bread_id")
  pullDownButton4.addEventListener("change", function order(){
    const selected4 = $("#order_sweet_bread_id").children("option:selected");
    let selectedMenu = selected4.text();
    
    console.log(selectedMenu)
    
    const table = document.getElementById("table-body");
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(-1);
    let cell2 = row.insertCell(-1); 
    let cell3 = row.insertCell(-1); 
    let cell4 = row.insertCell(-1);

    let newText  = document.createTextNode(selectedMenu);
    cell1.appendChild(newText);

    let kcal  = document.createTextNode("kcal");
    cell2.appendChild(kcal);

    let money  = document.createTextNode("円（税込み）");
    cell3.appendChild(money);

    cell4.innerHTML = '<input type="button" value=削除 id="coladd" class="deleteBtn">';

    $(".deleteBtn").on("click", function(){
      $(this).closest('tr').remove();
    });
  })

  const pullDownButton5 = document.getElementById("order_sandwich_id")
  pullDownButton5.addEventListener("change", function order(){
    const selected5 = $("#order_sandwich_id").children("option:selected");
    let selectedMenu = selected5.text();
    
    console.log(selectedMenu)
    
    const table = document.getElementById("table-body");
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(-1);
    let cell2 = row.insertCell(-1); 
    let cell3 = row.insertCell(-1); 
    let cell4 = row.insertCell(-1);

    let newText  = document.createTextNode(selectedMenu);
    cell1.appendChild(newText);

    let kcal  = document.createTextNode("kcal");
    cell2.appendChild(kcal);

    let money  = document.createTextNode("円（税込み）");
    cell3.appendChild(money);

    cell4.innerHTML = '<input type="button" value=削除 id="coladd" class="deleteBtn">';

    $(".deleteBtn").on("click", function(){
      $(this).closest('tr').remove();
    });
  })

  const pullDownButton6 = document.getElementById("order_salad_soup_id")
  pullDownButton6.addEventListener("change", function order(){
    const selected6 = $("#order_salad_soup_id").children("option:selected");
    let selectedMenu = selected6.text();
    
    console.log(selectedMenu)
    
    const table = document.getElementById("table-body");
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(-1);
    let cell2 = row.insertCell(-1); 
    let cell3 = row.insertCell(-1); 
    let cell4 = row.insertCell(-1);

    let newText  = document.createTextNode(selectedMenu);
    cell1.appendChild(newText);

    let kcal  = document.createTextNode("kcal");
    cell2.appendChild(kcal);

    let money  = document.createTextNode("円（税込み）");
    cell3.appendChild(money);

    cell4.innerHTML = '<input type="button" value=削除 id="coladd" class="deleteBtn">';

    $(".deleteBtn").on("click", function(){
      $(this).closest('tr').remove();
    });
  })

  const pullDownButton7 = document.getElementById("order_fry_id")
  pullDownButton7.addEventListener("change", function order(){
    const selected7 = $("#order_fry_id").children("option:selected");
    let selectedMenu = selected7.text();
    
    console.log(selectedMenu)
    
    const table = document.getElementById("table-body");
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(-1);
    let cell2 = row.insertCell(-1); 
    let cell3 = row.insertCell(-1); 
    let cell4 = row.insertCell(-1);

    let newText  = document.createTextNode(selectedMenu);
    cell1.appendChild(newText);

    let kcal  = document.createTextNode("kcal");
    cell2.appendChild(kcal);

    let money  = document.createTextNode("円（税込み）");
    cell3.appendChild(money);

    cell4.innerHTML = '<input type="button" value=削除 id="coladd" class="deleteBtn">';

    $(".deleteBtn").on("click", function(){
      $(this).closest('tr').remove();
    });
  })

  const pullDownButton8 = document.getElementById("order_dessert_id")
  pullDownButton8.addEventListener("change", function order(){
    const selected8 = $("#order_dessert_id").children("option:selected");
    let selectedMenu = selected8.text();
    
    console.log(selectedMenu)
    
    const table = document.getElementById("table-body");
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(-1);
    let cell2 = row.insertCell(-1); 
    let cell3 = row.insertCell(-1); 
    let cell4 = row.insertCell(-1);

    let newText  = document.createTextNode(selectedMenu);
    cell1.appendChild(newText);

    let kcal  = document.createTextNode("kcal");
    cell2.appendChild(kcal);

    let money  = document.createTextNode("円（税込み）");
    cell3.appendChild(money);

    cell4.innerHTML = '<input type="button" value=削除 id="coladd" class="deleteBtn">';

    $(".deleteBtn").on("click", function(){
      $(this).closest('tr').remove();
    });
  })

})

