const {PrismaClient}=require('@prisma/client')
const prisma=new PrismaClient()


exports.makeProductId = async (goldSmithCode, itemCode, product) => {

    let gross = product.grossWeight.toString();  // ex: "12.530"

    if (gross.includes(".")) {
        // Remove trailing zeros in decimal part (12.530 → 12.53, 12.010 → 12.01, 12.30 → 12.3)
        gross = gross.replace(/(\.\d*?[1-9])0+$/, "$1"); 
        gross = gross.replace(/\.0+$/, ""); // handle cases like 12.0 → 12

        // remove decimal point entirely
        gross = gross.replace(".", "");
    }

    // pad the number to 6 digits
    let cleanWeight = gross.padStart(6, "0");

    // Final Product ID
    const id = "PL" + product.id + goldSmithCode + itemCode + cleanWeight;

    const updateProduct = await prisma.product_info.update({
        where: { id: product.id },
        data: { product_number: id },
        include: { product_images: true }
    });

    return updateProduct;
};


