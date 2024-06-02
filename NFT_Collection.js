//variable to hold NFT's
const NFTs = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _irisColor, _shirtStyle, _swagType ) {
    const NFT ={
    "name" : _name,
    "irisColor" : _irisColor,
    "shirtStyle" : _shirtStyle,
    "swag" : _swagType}

    NFTs.push(NFT);
    console.log("Minted: " +_name);
    

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for( let i =0; i<NFTs.length; i++){
        console.log("\nID : " +(i+1));
        console.log("Name : ",NFTs[i].name);
        console.log("Iris Color : ", NFTs[i].irisColor);
        console.log("Shirt Style : ",NFTs[i].shirtStyle);
        console.log("Swag : ",NFTs[i].swag);

    }


}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal NFTs are : ",NFTs.length);

}

// call your functions below this line
mintNFT("Sangam", "Brown","Buisness Casual","Microsoft Creator");
mintNFT("Vaishnavi", "Brown","Buisness Casual","Microsoft Creator");


listNFTs();
getTotalSupply();

