package week1.Singletonex;

public class Logger {
    // Static variable to hold the single instance
    private static Logger instance;

    // Private constructor to prevent instantiation
    private Logger() {
        System.out.println("Logger instance created.");
    }

    // Public method to provide access to the instance
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger(); // Lazy initialization
        }
        return instance;
    }

    // Sample method for logging
    public void log(String message) {
        System.out.println("Log: " + message);
    }
}
