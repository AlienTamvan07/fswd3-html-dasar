var tanya = true;
while(tanya) {

    var player = prompt ("pilih : batu, gunting, kertas");

    var computer = Math.random();
    if( computer <0.34){
      computer="batu";    
    } else if (computer >= 0.34 && computer < 0.67){
        computer = "gunting";
    } else {
        computer="kertas";
    }

    if(player == computer){
        hasil = "seri";
    } else if (player == "batu"){
        hasil = (computer == "gunting") ? "menang" : "kalah";
    }else if (player == "gunting"){
        hasil = (computer == "batu") ? "kalah" : "menang";
    }else if (player == "kertas"){
        hasil = (computer == "orang") ? "kalah" : "menang";
    }else {
        hasil = "pilihan tidak ada";
    }

    alert("pilihanmu: " + player  + " pilihan komputer : " + computer +" \nmaka hasilnya : " + hasil);

    tanya = confirm("lagi?");
}

alert ("terimakasih")


