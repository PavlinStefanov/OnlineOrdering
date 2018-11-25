﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using OnlineOrdering.Stationery.Infrastructure.DAL;
using System;

namespace OnlineOrdering.Stationery.Infrastructure.DAL.Migrations
{
    [DbContext(typeof(StationeryContext))]
    partial class StationeryContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.2-rtm-10011")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("OnlineOrdering.Stationery.Infrastructure.DAL.Model.Category", b =>
                {
                    b.Property<int>("CategoryId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("CategoryName")
                        .HasMaxLength(50);

                    b.HasKey("CategoryId");

                    b.ToTable("Category");
                });

            modelBuilder.Entity("OnlineOrdering.Stationery.Infrastructure.DAL.Model.JobPosition", b =>
                {
                    b.Property<int>("JobPositionId")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("IsActive");

                    b.Property<string>("Name")
                        .HasMaxLength(100);

                    b.HasKey("JobPositionId");

                    b.ToTable("JobPosition");
                });

            modelBuilder.Entity("OnlineOrdering.Stationery.Infrastructure.DAL.Model.LinkedOrder", b =>
                {
                    b.Property<int>("LinkId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("DateCreated");

                    b.Property<int>("UserId");

                    b.HasKey("LinkId");

                    b.ToTable("LinkedOrders");
                });

            modelBuilder.Entity("OnlineOrdering.Stationery.Infrastructure.DAL.Model.Order", b =>
                {
                    b.Property<int>("OrderId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("IsCompletedOc");

                    b.Property<bool>("IsCompletedRm");

                    b.Property<bool>("IsLinkedOc");

                    b.Property<bool>("IsLinkedRm");

                    b.Property<int?>("LinkId");

                    b.Property<string>("OrderComment");

                    b.Property<DateTime>("OrderDate");

                    b.Property<int>("OrderStatusId");

                    b.Property<decimal>("TotalAmount");

                    b.Property<int>("UnitId");

                    b.Property<int>("UserId");

                    b.HasKey("OrderId");

                    b.HasIndex("LinkId");

                    b.HasIndex("OrderStatusId");

                    b.HasIndex("UnitId");

                    b.ToTable("Orders");
                });

            modelBuilder.Entity("OnlineOrdering.Stationery.Infrastructure.DAL.Model.OrderDetails", b =>
                {
                    b.Property<int>("OrderId");

                    b.Property<int>("ProductId");

                    b.Property<string>("EComment");

                    b.Property<string>("OCComment");

                    b.Property<int>("Quantity");

                    b.Property<string>("RMComment");

                    b.Property<int>("StatustId");

                    b.Property<decimal>("UnitPrice");

                    b.HasKey("OrderId", "ProductId");

                    b.HasIndex("ProductId");

                    b.ToTable("OrderDetails");
                });

            modelBuilder.Entity("OnlineOrdering.Stationery.Infrastructure.DAL.Model.OrderStatus", b =>
                {
                    b.Property<int>("OrderStatusId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description");

                    b.Property<string>("Flow");

                    b.Property<string>("Name")
                        .HasMaxLength(25);

                    b.HasKey("OrderStatusId");

                    b.ToTable("OrderStatus");
                });

            modelBuilder.Entity("OnlineOrdering.Stationery.Infrastructure.DAL.Model.Product", b =>
                {
                    b.Property<int>("ProductId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("ArticuleId");

                    b.Property<string>("Description");

                    b.Property<byte[]>("ImageContent");

                    b.Property<Guid?>("ImageId");

                    b.Property<string>("ImageType")
                        .HasMaxLength(10);

                    b.Property<string>("ImageURL")
                        .HasMaxLength(200);

                    b.Property<string>("Measure")
                        .HasMaxLength(10);

                    b.Property<string>("Name");

                    b.Property<string>("ProductName")
                        .HasMaxLength(200);

                    b.Property<int>("SubCategoryId");

                    b.Property<decimal>("UnitPrice");

                    b.Property<int>("VendorId");

                    b.HasKey("ProductId");

                    b.HasIndex("SubCategoryId");

                    b.HasIndex("VendorId");

                    b.ToTable("Product");
                });

            modelBuilder.Entity("OnlineOrdering.Stationery.Infrastructure.DAL.Model.SubCategory", b =>
                {
                    b.Property<int>("SubCategoryId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CategoryId");

                    b.Property<string>("SubCategoryName")
                        .HasMaxLength(100);

                    b.HasKey("SubCategoryId");

                    b.HasIndex("CategoryId");

                    b.ToTable("SubCategories");
                });

            modelBuilder.Entity("OnlineOrdering.Stationery.Infrastructure.DAL.Model.Unit", b =>
                {
                    b.Property<int>("UnitId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Address")
                        .HasMaxLength(70);

                    b.Property<string>("Email")
                        .HasMaxLength(50);

                    b.Property<string>("Location")
                        .HasMaxLength(25);

                    b.Property<string>("PhoneNumber");

                    b.Property<string>("Region")
                        .HasMaxLength(25);

                    b.Property<string>("UnitName")
                        .HasMaxLength(50);

                    b.HasKey("UnitId");

                    b.ToTable("Units");
                });

            modelBuilder.Entity("OnlineOrdering.Stationery.Infrastructure.DAL.Model.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<byte[]>("BackGroundImage");

                    b.Property<string>("CorporateEmail")
                        .HasMaxLength(50);

                    b.Property<string>("FirstName")
                        .HasMaxLength(20);

                    b.Property<string>("ImgName")
                        .HasMaxLength(10);

                    b.Property<bool>("IsActive");

                    b.Property<int>("JobPositionId");

                    b.Property<string>("LastName")
                        .HasMaxLength(20);

                    b.Property<int?>("ManagerId");

                    b.Property<byte[]>("ProfileImage");

                    b.Property<int>("UnitId");

                    b.Property<string>("UserName")
                        .HasMaxLength(15);

                    b.HasKey("UserId");

                    b.HasIndex("JobPositionId");

                    b.HasIndex("UnitId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("OnlineOrdering.Stationery.Infrastructure.DAL.Model.Vendor", b =>
                {
                    b.Property<int>("VendorId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Address");

                    b.Property<string>("PhoneNumber");

                    b.Property<string>("VendorName")
                        .HasMaxLength(50);

                    b.HasKey("VendorId");

                    b.ToTable("Vendor");
                });

            modelBuilder.Entity("OnlineOrdering.Stationery.Infrastructure.DAL.Model.Order", b =>
                {
                    b.HasOne("OnlineOrdering.Stationery.Infrastructure.DAL.Model.LinkedOrder", "LinkedOrder")
                        .WithMany("Orders")
                        .HasForeignKey("LinkId");

                    b.HasOne("OnlineOrdering.Stationery.Infrastructure.DAL.Model.OrderStatus", "OrderStatus")
                        .WithMany("Orders")
                        .HasForeignKey("OrderStatusId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("OnlineOrdering.Stationery.Infrastructure.DAL.Model.Unit", "Unit")
                        .WithMany("Orders")
                        .HasForeignKey("UnitId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("OnlineOrdering.Stationery.Infrastructure.DAL.Model.OrderDetails", b =>
                {
                    b.HasOne("OnlineOrdering.Stationery.Infrastructure.DAL.Model.Order", "Order")
                        .WithMany("OrderDetails")
                        .HasForeignKey("OrderId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("OnlineOrdering.Stationery.Infrastructure.DAL.Model.Product", "Product")
                        .WithMany("OrderDetails")
                        .HasForeignKey("ProductId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("OnlineOrdering.Stationery.Infrastructure.DAL.Model.Product", b =>
                {
                    b.HasOne("OnlineOrdering.Stationery.Infrastructure.DAL.Model.SubCategory", "SubCategory")
                        .WithMany("Products")
                        .HasForeignKey("SubCategoryId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("OnlineOrdering.Stationery.Infrastructure.DAL.Model.Vendor", "Vendor")
                        .WithMany("Products")
                        .HasForeignKey("VendorId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("OnlineOrdering.Stationery.Infrastructure.DAL.Model.SubCategory", b =>
                {
                    b.HasOne("OnlineOrdering.Stationery.Infrastructure.DAL.Model.Category", "Category")
                        .WithMany("SubCategories")
                        .HasForeignKey("CategoryId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("OnlineOrdering.Stationery.Infrastructure.DAL.Model.User", b =>
                {
                    b.HasOne("OnlineOrdering.Stationery.Infrastructure.DAL.Model.JobPosition", "JobPosition")
                        .WithMany("Users")
                        .HasForeignKey("JobPositionId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("OnlineOrdering.Stationery.Infrastructure.DAL.Model.Unit", "Unit")
                        .WithMany("Users")
                        .HasForeignKey("UnitId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
