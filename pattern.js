function starPattern(n) {
          for (var i = 0; i < n; i++) {
                    // row count
                    for (var j = 0; j < n; j++) {
                              // column count
                              document.write('* ');
                    }
                    document.write('<br>');
          }
}

function increaseTranglePattern(n) {
          for (var i = 1; i <= n; i++) {
                    // row count
                    for (var j = 1; j <= i; j++) {
                              // column count
                              document.write('* ');
                    }
                    document.write('<br>');
          }
}

function decreaseTranglePattern(n) {
          for (var i = n; i > 0; i--) {
                    // row count
                    for (var j = 1; j <= i; j++) {
                              // column count
                              document.write('* ');
                    }
                    document.write('<br>');
          }
}

function rightSidedTranglePattern(n) {
          for (var i = 1; i <= n; i++) {
                    for (var j = i; j <= n; j++) {
                              document.write('&nbsp;&nbsp;&nbsp'); // space not so #
                    }
                    for (var k = 1; k <= i; k++) {
                              document.write('*');
                    }
                    document.write('<br>');
          }
}

function hallowTranglePattern(n) {
          for (var i = 1; i <= n; i++) {
                    // row count
                    if (i === 1 || i === n) {
                              for (var j = 1; j <= n; j++) {
                                        document.write('* ');
                              }
                    } else {
                              for (var k = 1; k <= n; k++) {
                                        if (k === 1 || k === n) {
                                                  document.write('* ');
                                        } else {
                                                  document.write(
                                                            '&nbsp;&nbsp;&nbsp'
                                                  );
                                        }
                              }
                    }
                    document.write('<br>');
          }
}

function pramidTranglePattern(n) {
          // 2*i -1
          for (var i = 1; i <= n; i++) {
                    //row count
                    for (var j = 1; j <= n - i; j++) {
                              document.write('&nbsp;&nbsp;&nbsp');
                    }
                    for (var k = 1; k <= i * 2 - 1; k++) {
                              document.write('* ');
                    }
                    document.write('<br>');
          }
}
function reversePramidTranglePattern(n) {
          // 2*(n-i)-1
          for (var i = 1; i <= n; i++) {
                    //row count
                    for (var j = 0; j < i; j++) {
                              document.write('&nbsp;&nbsp;&nbsp');
                    }
                    for (var k = 1; k <= 2 * (n - i) - 1; k++) {
                              document.write('* ');
                    }
                    document.write('<br>');
          }
}
function diamondPramidTranglePattern(n) {
          for (var i = 1; i <= n; i++) {
                    for (var j = 1; j <= n - i; j++) {
                              document.write('&nbsp;&nbsp;&nbsp');
                    }
                    for (var k = 1; k <= 2 * i - 1; k++) {
                              document.write('* ');
                    }
                    document.write('<br>');
          }
          for (var i = 1; i <= n; i++) {
                    for (var j = 1; j <= i; j++) {
                              document.write('&nbsp;&nbsp;&nbsp');
                    }
                    for (var k = 1; k <= 2 * (n - i) - 1; k++) {
                              document.write('* ');
                    }
                    document.write('<br>');
          }
}

function hollowTranglePattern(n) {
          for (var i = 1; i <= n; i++) {
                    for (var j = 1; j <= n - i; j++) {
                              document.write('&nbsp;&nbsp;&nbsp');
                    }
                    for (var k = 1; k <= 2 * i - 1; k++) {
                              if (k === 1 || k === 2 * i - 1) {
                                        document.write('* ');
                              } else {
                                        document.write('&nbsp;&nbsp;&nbsp');
                              }
                    }

                    document.write('<br>');
          }
          for (var i = 1; i <= n; i++) {
                    for (var j = 1; j <= i; j++) {
                              document.write('&nbsp;&nbsp;&nbsp');
                    }
                    for (var k = 1; k <= 2 * (n - i) - 1; k++) {
                              if (k === 1 || k === 2 * (n - i) - 1) {
                                        document.write('* ');
                              } else {
                                        document.write('&nbsp;&nbsp;&nbsp');
                              }
                    }
                    document.write('<br>');
          }
}

function hourGlassTranglePattern(n) {
          for (var i = 1; i < n; i++) {
                    for (var j = 1; j <= i; j++) {
                              document.write('&nbsp;&nbsp;&nbsp');
                    }
                    for (var k = 1; k <= 2 * (n - i) - 1; k++) {
                              document.write('* ');
                    }
                    document.write('<br>');
          }
          for (var i = 1; i <= n - 1; i++) {
                    if (i !== 1) {
                              for (var j = 1; j <= n - i; j++) {
                                        document.write('&nbsp;&nbsp;&nbsp');
                              }
                              for (var k = 1; k <= 2 * i - 1; k++) {
                                        document.write('* ');
                              }
                              document.write('<br>');
                    }
          }
}

function rightPascalTranglePattern(n) {
          for (var i = 1; i <= n; i++) {
                    for (var j = 1; j <= i; j++) {
                              document.write('* ');
                    }
                    for (var k = 1; k <= n - i; k++) {
                              document.write('&nbsp;&nbsp;&nbsp');
                    }
                    document.write('<br>');
          }
          for (var i = 1; i <= n - 1; i++) {
                    for (var j = 1; j <= n - i; j++) {
                              document.write('* ');
                    }
                    for (var k = 1; k <= i; k++) {
                              document.write('&nbsp;&nbsp;&nbsp');
                    }
                    document.write('<br>');
          }
}

function leftPascalTranglePattern(n) {
          for (var i = 1; i <= n; i++) {
                    for (var k = 1; k <= n - i; k++) {
                              document.write('&nbsp;&nbsp;&nbsp');
                    }
                    for (var j = 1; j <= i; j++) {
                              document.write('* ');
                    }
                    document.write('<br>');
          }
          for (var i = 1; i <= n - 1; i++) {
                    for (var k = 1; k <= i; k++) {
                              document.write('&nbsp;&nbsp;&nbsp');
                    }
                    for (var j = 1; j <= n - i; j++) {
                              document.write('* ');
                    }
                    document.write('<br>');
          }
}
