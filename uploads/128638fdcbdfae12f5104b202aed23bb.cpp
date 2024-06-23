#include <iostream>
using namespace std;

int main() {
    int a;
    a=5;
    cout << "Enter the number: ";

    if (a % 2 == 0) {
        cout << "The given number is EVEN" << endl;
    } else {
        cout << "The given number is ODD" << endl;
    }

    return 0;
}
