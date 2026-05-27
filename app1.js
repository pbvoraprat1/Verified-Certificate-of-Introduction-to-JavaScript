function calculateTrees()
{
    let paperInput = document.getElementById("paperInput").value;
    let resultText = document.getElementById("resultText");
    let resultCard = document.getElementById("resultCard");
    if (paperInput === "" || isNaN(paperInput) || paperInput < 0) {
        resultText.textContent = "กรุณาใส่จำนวนกระดาษที่ถูกต้อง (ตัวเลขตั้งแต่ 0 ขึ้นไป)";
        resultCard.classList.remove("hidden");
        return;
    }
    let paperCount = parseInt(paperInput);
    const paperPerTree = 8333;
    let treesSaved = paperCount / paperPerTree;
    resultCard.classList.remove("hidden");
    if (paperCount === 0) {
        resultText.textContent = "คุณไม่ได้ใช้กระดาษเลย! คุณช่วยรักษาต้นไม้ได้ 100% แล้ว!";
    } else 
{
        resultText.innerHTML = "คุณใช้กระดาษจำนวน <span class='number-red'>" + paperCount.toLocaleString() + 
        "</span> แผ่น<br>คุณต้องปลูกต้นไม้ทดแทนจำนวน <span class='number-red'>" + treesSaved.toFixed(4) + "</span> ต้น";
    }
}
