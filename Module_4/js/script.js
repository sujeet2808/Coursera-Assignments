var names=new Array();

names[0]="Yaakov";
names[1]="sujeet";
names[2]="Jason";
names[3]="jenny";
names[4]="Paul";
names[5]="Jennifer";
names[6]="Chris";
names[7]="Stefan";
names[8]="jack";
names[9]="John";

for (var i = 0; i < names.length; i++) {
    if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j') {
        console.log("Goodbye "+ names[i])
    }
    else{
        console.log("Hello "+ names[i])
    }
}