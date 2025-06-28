package com.example.JunitDemo;

import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionsTest {

    @Test
    public void testAssertions() {
        // Assert that 2 + 3 equals 5
        assertEquals(5, 2 + 3);

        // Assert that condition is true
        assertTrue(5 > 3);

        // Assert that condition is false
        assertFalse(5 < 3);

        // Assert that the object is null
        assertNull(null);

        // Assert that the object is NOT null
        assertNotNull(new Object());
    }
}
