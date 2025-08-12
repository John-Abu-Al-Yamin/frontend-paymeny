import React from "react";
import { useParams } from "react-router-dom";
import { useGetUsersQuery } from "../../redux/features/users/usersApiSlice";

const UserId = () => {
  const { id } = useParams();
  const { data: users, isLoading, error } = useGetUsersQuery();

  if (isLoading) return <p>جار التحميل...</p>;
  if (error) return <p>حصل خطأ أثناء تحميل البيانات</p>;

  // نلاقي اليوزر اللي الـ id بتاعه مطابق
  const user = users?.find((u) => u._id === id);

  if (!user) return <p>المستخدم غير موجود</p>;

  return (
    <div>
      <h1>اسم المستخدم: {user.username}</h1>
      <p>الرقم: {user.phone}</p>
      <p>المعرف: {user._id}</p>
    </div>
  );
};

export default UserId;
