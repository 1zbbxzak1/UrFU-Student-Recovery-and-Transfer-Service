export const seedData = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/seed", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to seed data");
    }

    console.log("Data seeded successfully");
  } catch (error) {
    console.error("Error seeding data:", error.message);
  }
};