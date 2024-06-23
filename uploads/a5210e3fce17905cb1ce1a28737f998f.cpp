#include <iostream>
using namespace std;

int main() {
  int a;
  cout << "Enter the number: ";
  cin >> a;

  // Clear input buffer
  cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');

  if (a % 2 == 0) {
    cout << "The given number is EVEN" << endl;
  } else {
    cout << "The given number is ODD" << endl;
  }

  return 0;
}
