#include <iostream>
using namespace std;

int main() {
    int numStars = 50;  // Initial number of stars

    for (int i = 0; i < 10; ++i) {
        for (int j = 0; j < numStars; ++j) {
            cout << "*";
        }
        cout << endl;
        numStars--;  // Decrease the number of stars for the next line
    }

    return 0;
}
