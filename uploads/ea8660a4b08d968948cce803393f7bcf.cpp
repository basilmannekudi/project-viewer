#include <iostream>
using namespace std;

int main() {
    int a;
    cout << "Enter the number: ";
    cin >> a;

    // Clear input buffer
    cin.ignore(1000, '\n');  // Ignore up to 1000 characters until '\n' is found

    if (a % 2 == 0) {
        cout << "The given number is EVEN" << endl;
    } else {
        cout << "The given number is ODD" << endl;
    }

    return 0;
}
