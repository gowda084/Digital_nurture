package week1.FinancialForecastex;

import java.util.Scanner;

public class FinancialForecast {

    // Recursive method to forecast value
    public static double forecastValueRecursive(double currentValue, double growthRate, int years) {
        if (years == 0) return currentValue;
        return forecastValueRecursive(currentValue, growthRate, years - 1) * (1 + growthRate);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // User input
        System.out.print("Enter initial investment amount (₹): ");
        double initialValue = sc.nextDouble();

        System.out.print("Enter annual growth rate (%): ");
        double growthRatePercent = sc.nextDouble();
        double growthRate = growthRatePercent / 100; // Convert to decimal

        System.out.print("Enter number of years to forecast: ");
        int years = sc.nextInt();

        // Calculate future value
        double futureValue = forecastValueRecursive(initialValue, growthRate, years);

        // Display output
        System.out.printf("Forecasted Value after %d years at %.2f%% growth: ₹%.2f\n",
                          years, growthRatePercent, futureValue);
        
        sc.close();
    }
}