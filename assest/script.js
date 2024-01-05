
function calculateF(x, y) {
    if (x > 0 && y < 0) {
      return 4 * x + 2 * y + 4;
    } else if (x > 0 && y === 0) {
      return 2 * x - y + 3;
    } else if (x < 0 && y > 0) {
      return 3 * x + 4 * y + 3;
    } else {
      console.log("Daxil edilmiş x və y dəyərləri üçün funksiya təyin edilməyib.");
    }
  }
  
  // Giriş verilənləri
  let x = 25;
  let y = -5;
  
  // Funksiyanın tətbiqi və nəticənin çapı
  let result = calculateF(x, y);
  console.log(`f(${x}, ${y}) = ${result}`);
  
  
  