package com.library.main;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.library.service.BookService;

public class LibraryMain {

    public static void main(String[] args) {
        // Load Spring context
        ApplicationContext context = 
                new ClassPathXmlApplicationContext("applicationContext.xml");

        // Get the BookService bean
        BookService bookService = (BookService) context.getBean("bookService");

        // Call the method
        bookService.addBook();

        // Close context
        ((ClassPathXmlApplicationContext) context).close();
    }
}
